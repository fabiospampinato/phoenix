
/* IMPORT */

require ( './magic/terminal.js' );

/* LAUNCHERS */

const launchChrome = `
  tell application "Google Chrome"
    make new window
    activate
  end tell
`;

function launchDevTools () {

  const chrome = Space.active ().windows ().find ( window => /Google Chrome/.test ( window.app ().name () ) );

  if ( !chrome ) return alert ( 'Chrome is not opened' );

  osascript (`
    tell application "Google Chrome" to activate
    tell application "System Events" to tell process "Google Chrome"
      click menu item "Developer Tools" of menu 1 of menu item "Developer" of menu 1 of menu bar item "View" of menu bar 1
    end tell
  `);

}

const launchVSC = () => Task.run ( '/usr/local/bin/code', ['-n'] );

const launchTerminal = `
  tell application "Terminal"
    do script ""
    activate
  end tell
`;

const launchFinder = `
  tell application "Finder"
    make new Finder window to (path to downloads folder)
    activate
  end tell
`;

/* CALLBACKS */

function callbackTerminal () {

  setTimeout ( () => {

    const focused = Window.focused ();

    if ( !focused ) return;

    magicTerminalOpen ( focused );

  }, 600 );

}

/* FOCUS */

const focus = [
  ['`', HYPER, ['Noty']],
  ['c', HYPER, ['Google Chrome', /^(?!Developer Tools)/, launchChrome]],
  ['d', HYPER, ['Google Chrome', /(Developer Tools)|(chrome-devtools)/, launchDevTools]],
  ['v', HYPER, ['Code', false, launchVSC]],
  // ['t', HYPER, ['Terminal', false, launchTerminal, callbackTerminal]], //FIXME: Ugly, but since `windowDidOpen` won't trigger, at least now it will behave as expected
  ['t', HYPER, ['Hyper']],
  ['f', HYPER, ['Finder', false, launchFinder]],
  ['g', HYPER, ['Tower']]
];

setHandlers ( focusWindow, focus );
