//switch app, and remember mouse position
function callApp(appName) {
  var window = Window.focused();
  if (window) {
    save_mouse_position_for_window(window);
  }
  var app = App.launch(appName);
  Timer.after(0.300, function() {
    app.focus();
    var newWindow = _.first(app.windows());
    if (newWindow && window !== newWindow) {
      restore_mouse_position_for_window(newWindow);
    }
  })
}

/**
 * My Configuartion App
 */

// Launch App
keys.push(new Key('1', HYPER, function() { callApp('Hyper'); }));
keys.push(new Key('2', HYPER, function() { callApp('Dash'); }));
keys.push(new Key('3', HYPER, function() { callApp('印象笔记'); }));
keys.push(new Key('4', HYPER, function() { callApp('DingTalk'); }));
keys.push(new Key('9', HYPER, function() { callApp('Finder'); }));
keys.push(new Key('0', HYPER, function() { callApp('Google Chrome'); }));
