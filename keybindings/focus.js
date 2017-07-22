
/* FOCUS */

const focus = [
  ['c', HYPER, ['Google Chrome', /^(?!Developer Tools)/]],
  ['d', HYPER, ['Google Chrome', /(Developer Tools)|(chrome-devtools)/, launchDevTools]],
  ['v', HYPER, ['Code']],
  ['t', HYPER, ['Terminal']],
  ['f', HYPER, ['Finder']]
];

setHandlers ( focusWindow, focus );

/* HELPERS */

function launchDevTools () {

  const chrome = Space.active ().windows ().find ( window => /Google Chrome/.test ( window.app ().name () ) );

  if ( !chrome ) return;

  osascript (`
    tell application "Google Chrome" to activate
    tell application "System Events"
      keystroke "i" using {option down, command down}
    end tell
  `);

}
