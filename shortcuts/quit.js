
/* QUIT */

let lastQuitTimestamp = 0;

setKeyHandler ( 'q', ['cmd'], () => {

  const timestamp = Date.now ();

  if ( timestamp - lastQuitTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastQuitTimestamp = 0;

    const app = App.focused ();

    if ( !app ) return;

    if ( app.name () === 'Finder' ) {

      osascript ( 'tell application "Finder" to close every window', () => {

        shell ( 'killall Finder' );

      });

    } else {

      app.terminate ();

    }

  } else {

    lastQuitTimestamp = timestamp;

  }

});
