
/* FOCUS WINDOW */

function focusWindow ( name = false, isNameOptional = false, title = false, titleBlacklist = false, launch = true, callback = _.noop ) {

  const space = Space.active (),
        window = findWindow ( space.windows (), name, isNameOptional, title, titleBlacklist );

  if ( window ) {

    window.unminimise ()
    window.focus ();

    callback ( false );

  } else if ( launch ) {

    if ( _.isFunction ( launch ) ) {

      launch ();

      callback ( true );

    } else if ( _.isString ( launch ) ) {

      osascript ( launch );

      callback ( true );

    } else if ( name ) {

      const app = App.launch ( name, { focus: true } );

      if ( !app ) return;

      /* CHECKING */

      let checksNr = 0,
          maxChecksNr = FOCUS_WINDOW_CHECK_CYCLES;

      const intervalId = setInterval ( () => {

        const newWindow = findWindow ( space.windows (), name, isNameOptional, title );

        if ( newWindow ) {

          clearInterval ( intervalId );

          callback ( true );

        } else if ( checksNr >= maxChecksNr ) {

          alert ( `Can't open new "${name}" window, provide some custom logic` );

          clearInterval ( intervalId );

          callback ( true );

        }

        checksNr++;

      }, FOCUS_WINDOW_CHECK_INTERVAL );

    }

  }

}
