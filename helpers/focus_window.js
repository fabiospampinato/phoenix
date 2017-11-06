
/* FOCUS WINDOW */

function focusWindow ( name = false, title = false, launch = true, callback = _.noop ) {

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

      /* CHECKING */

      let checksNr = 0,
          maxChecksNr = FOCUS_WINDOW_CHECK_CYCLES;

      const intervalId = setInterval ( () => {

        const newWindow = findWindow ( space.windows (), name, title );

        if ( newWindow ) {

          newWindow.focus ();

          clearInterval ( intervalId );

        } else if ( checksNr >= maxChecksNr ) {

          alert ( `Can't open new "${name}" window, provide some custom logic` );

          clearInterval ( intervalId );

        }

        checksNr++;

      }, FOCUS_WINDOW_CHECK_INTERVAL );

    }

  }

  callback ();

}
