
/* FIND WINDOW */

function findWindow ( windows = Window.all (), name = false, isNameOptional = false, title = false, titleBlacklist = false ) {

  let fallback;

  for ( let i = 0, l = windows.length; i < l; i++ ) {

    const window = windows[i],
          windowTitle = window.title ();

    if ( !windowTitle ) continue; // Not a normal window

    const titleOK = !title || ( title.test ( windowTitle ) && ( !titleBlacklist || !titleBlacklist.test ( windowTitle ) ) );

    if ( !titleOK ) continue;

    const nameOK = !name || ( window.app ().name () === name );

    if ( nameOK ) return window;

    if ( isNameOptional ) fallback = window;

  }

  return fallback;

}
