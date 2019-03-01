/**
 * Phoenix
 * doc: https://github.com/jasonm23/phoenix/wiki/JavaScript-API-documentation
 *
 * Global Settings
 */

var keys = [];
var mousePositions = {};
var ACTIVE_WINDOWS_TIMES = {};
var A_BIG_PIXEL = 10000; // 


/**
 * Utils Functions
 */

function alert(message) {
  var modal = new Modal();
  modal.message = message;
  modal.duration = 2;
  modal.show();
}

function sortByMostRecent(windows) {
  var visibleAppMostRecentFirst = _.map(
	Window.recent(), function(w) { return w.hash(); }
  );
  var visibleAppMostRecentFirstWithWeight = _.zipObject(
	visibleAppMostRecentFirst, _.range(visibleAppMostRecentFirst.length)
  );
  return _.sortBy(windows, function(window) { return visibleAppMostRecentFirstWithWeight[window.hash()]; });
};

function getCurrentWindow() {
  var window = Window.focused();
  if (window === undefined) {
	window = App.focused().mainWindow();
  }
  if (window === undefined) {
	return;
  }
  return window;
}

/**
 * Screen Functions
 */
function moveToScreen(window, screen) {
  if (!window) return;
  if (!screen) return;

  var frame = window.frame();
  var oldScreenRect = window.screen().visibleFrameInRectangle();
  var newScreenRect = screen.visibleFrameInRectangle();
  var xRatio = newScreenRect.width / oldScreenRect.width;
  var yRatio = newScreenRect.height / oldScreenRect.height;

  var mid_pos_x = frame.x + Math.round(0.5 * frame.width);
  var mid_pos_y = frame.y + Math.round(0.5 * frame.height);

  window.setFrame({
    x: (mid_pos_x - oldScreenRect.x) * xRatio + newScreenRect.x - 0.5 * frame.width,
    y: (mid_pos_y - oldScreenRect.y) * yRatio + newScreenRect.y - 0.5 * frame.height,
    width: frame.width,
    height: frame.height
  });
};


/**
 * Window Functions
 */
function heartbeat_window(window) {
  ACTIVE_WINDOWS_TIMES[window.app().pid] = new Date().getTime() / 1000;
}
function getAnotherWindowsOnSameScreen(window, offset, isCycle) {
  var windows = window.others({ visible: true, screen: window.screen() });
  windows.push(window);
  var screen = window.screen();
  windows = _.chain(windows).sortBy(function(window) {
    return [(A_BIG_PIXEL + window.frame().y - screen.flippedFrame().y) +
	  (A_BIG_PIXEL + window.frame().x - screen.flippedFrame().y),
	  window.app().pid, window.title()].join('');
  }).value();
  if (isCycle) {
	var index = (_.indexOf(windows, window) + offset + windows.length) % windows.length;
  } else {
	var index = _.indexOf(windows, window) + offset;
  }
  //alert(windows.length);
  //alert(_.map(windows, function(x) {return x.title();}).join(','));
  //alert(_.map(windows, function(x) {return x.app().name();}).join(','));
  if (index >= windows.length || index < 0) {
	return;
  }
  return windows[index];
}
function getPreviousWindowsOnSameScreen(window) {
  return getAnotherWindowsOnSameScreen(window, -1, false)
};
function getNextWindowsOnSameScreen(window) {
  return getAnotherWindowsOnSameScreen(window, 1, false)
};
/**
 * Mouse Functions     
 */
function save_mouse_position_for_window(window) {
  if (!window) return;
  heartbeat_window(window);
  var pos = Mouse.location()
  //pos.y = 800 - pos.y;  // fix phoenix 2.x bug
  mousePositions[window.hash()] = pos;
}
function set_mouse_position_for_window_center(window) {
  Mouse.move({
    x: window.topLeft().x + window.frame().width / 2,
    y: window.topLeft().y + window.frame().height / 2
  });
  heartbeat_window(window);
}
function restore_mouse_position_for_window(window) {
  if (!mousePositions[window.hash()]) {
    set_mouse_position_for_window_center(window);
    return;
  }
  var pos = mousePositions[window.hash()];
  var rect = window.frame();
  if (pos.x < rect.x || pos.x > (rect.x + rect.width) || pos.y < rect.y || pos. y > (rect.y + rect.height)) {
    set_mouse_position_for_window_center(window);
    return;
  }
  //Phoenix.log(String.format('x: {0}, y: {1}', pos.x, pos.y));
  Mouse.move(pos);
  heartbeat_window(window);
}
/**
 * My Configuartion Screen
 */
function focusAnotherScreen(window, targetScreen) {
  if (!window) return;
  var currentScreen = window.screen();
  if (window.screen() === targetScreen) return;
  //if (targetScreen.flippedFrame().x < currentScreen.flippedFrame().x) {
    //return;
  //}
  save_mouse_position_for_window(window);
  var targetScreenWindows = sortByMostRecent(targetScreen.windows());
  if (targetScreenWindows.length == 0) {
    return;
  }
  var targetWindow = targetScreenWindows[0]
  targetWindow.focus();  // bug, two window in two space, focus will focus in same space first
  restore_mouse_position_for_window(targetWindow);
  //App.get('Finder').focus(); // Hack for Screen unfocus
}

// 下一个切换屏幕
keys.push(new Key('l', HYPER, function() {
  var window = getCurrentWindow();
  if (window === undefined) {
	return;
  }
  var allScreens = Screen.all();
  var currentScreen = window.screen();
  if (currentScreen === undefined) {
	return; // TODO use mouse to find current screen
  }
  var targetScreen = currentScreen.next();
  if (_.indexOf(_.map(allScreens, function(x) { return x.hash(); }), targetScreen.hash())
	  >= _.indexOf(_.map(allScreens, function(x) { return x.hash(); }), currentScreen.hash())) {
		return;
	  }
	  focusAnotherScreen(window, targetScreen);
}));

// 上一个切换屏幕
keys.push(new Key('h', HYPER, function() {
  var window = getCurrentWindow();
  if (window === undefined) {
	return;
  }
  var allScreens = Screen.all();
  var currentScreen = window.screen();
  if (currentScreen === undefined) {
	return; // TODO use mouse to find current screen
  }
  var targetScreen = currentScreen.previous();
  if (_.indexOf(_.map(allScreens, function(x) { return x.hash(); }), targetScreen.hash())
	  <= _.indexOf(_.map(allScreens, function(x) { return x.hash(); }), currentScreen.hash())) {
		return;
	  }
  focusAnotherScreen(window, targetScreen);
}));
//当前屏幕的上一个窗口
keys.push(new Key('k', HYPER, function() {
  var window = Window.focused();
  if (!window) {
    if (Window.recent().length == 0) return;
    Window.recent()[0].focus();
    return;
  }
  save_mouse_position_for_window(window);
  var targetWindow = getPreviousWindowsOnSameScreen(window);
  if (!targetWindow) {
	return;
  }
  targetWindow.focus();
  restore_mouse_position_for_window(targetWindow);
}));

//当前屏幕的下一个窗口
keys.push(new Key('j', HYPER, function() {
  var window = Window.focused();
  if (!window) {
    if (Window.recent().length == 0) return;
    Window.recent()[0].focus();
    return;
  }
  save_mouse_position_for_window(window);
  var targetWindow = getNextWindowsOnSameScreen(window);  // <- most time cost
  if (!targetWindow) {
	return;
  }
  targetWindow.focus();
  restore_mouse_position_for_window(targetWindow);
}));


// 把窗口移到下一个屏幕
keys.push(new Key('j', HYPER_SHIFT, function() {
  var window = getCurrentWindow();
  if (window === undefined) {
	return;
  }
  if (window.screen() === window.screen().next()) return;
  if (window.screen().next().flippedFrame().x < 0) {
    return;
  }
  moveToScreen(window, window.screen().next());
  restore_mouse_position_for_window(window);
  //App.get('Finder').focus(); // Hack for Screen unfocus
  window.focus();
}));

// 把窗口移到上一个屏幕
keys.push(new Key('k', HYPER_SHIFT, function() {
  var window = getCurrentWindow();
  if (window === undefined) {
	return;
  }
  if (window.screen() === window.screen().next()) return;
  if (window.screen().next().flippedFrame().x == 0) {
    return;
  }
  moveToScreen(window, window.screen().previous());
  restore_mouse_position_for_window(window);
  //App.get('Finder').focus(); // Hack for Screen unfocus
  window.focus();
}));

// vim: set ft=javascript sw=2:
