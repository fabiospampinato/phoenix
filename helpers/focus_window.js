
/* FOCUS WINDOW */

function focusWindow ( name = false, title = false, launch = true ) {

  const space = Space.active (),
        window = findWindow ( space.windows (), name, title );

  if ( window ) {

    window.unminimise ()
    window.focus ();

  } else if ( launch ) {

    if ( _.isFunction ( launch ) ) {

      launch ();

    } else if ( _.isString ( launch ) ) {

      osascript ( launch );

    } else {

      const app = App.launch ( name );

      if ( !app ) return;

      const newWindow = findWindow ( space.windows (), name, title );

      if ( newWindow ) {

        newWindow.focus ();

      } else {

        alert ( `Can't open new "${name}" window, provide some custom logic` );

      }

    }

  }

}
