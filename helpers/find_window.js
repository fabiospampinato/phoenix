
/* FIND WINDOW */

function findWindow ( windows = Window.all (), name = false, title = false ) {

  return windows.find ( window => {

    const app = window.app ();

    if ( name && app.name () !== name ) return;

    return !title || ( window.title () && title.test ( window.title () ) );

  });

}
