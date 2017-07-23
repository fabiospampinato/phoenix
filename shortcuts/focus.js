
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
    tell application "System Events"
      keystroke "i" using {option down, command down}
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

/* FOCUS */

const focus = [
  ['c', HYPER, ['Google Chrome', /^(?!Developer Tools)/, launchChrome]],
  ['d', HYPER, ['Google Chrome', /(Developer Tools)|(chrome-devtools)/, launchDevTools]], //FIXME: If Hyper has been down for a while it will actually trigger Hyper+I
  ['v', HYPER, ['Code', false, launchVSC]],
  ['t', HYPER, ['Terminal', false, launchTerminal]],
  ['f', HYPER, ['Finder', false, launchFinder]]
];

setHandlers ( focusWindow, focus );
