
/* FIND WINDOW */

function findWindow ( windows = Window.all (), name = false, isNameOptional = false, title = false ) {

  let fallback;

  for ( let i = 0, l = windows.length; i < l; i++ ) {

    const window = windows[i];

    const titleOK = !title || ( title.test ( window.title () || '' ) );

    if ( !titleOK ) continue;

    const nameOK = !name || ( window.app ().name () === name );

    if ( nameOK ) return window;

    if ( isNameOptional ) fallback = window;

  }

  return fallback;

}
