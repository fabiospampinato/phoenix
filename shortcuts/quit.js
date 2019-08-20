
/* QUIT */

let lastQuitTimestamp = 0;

setKeyHandler ( 'q', ['cmd'], () => {

  const timestamp = Date.now ();

  if ( timestamp - lastQuitTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastQuitTimestamp = 0;

    const app = App.focused ();

    if ( !app || _.includes ( QUIT_BLACKLIST, app.name () ) ) return;

    app.terminate ();

  } else {

    lastQuitTimestamp = timestamp;

  }

});
