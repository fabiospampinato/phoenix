
/* FOCUS WINDOW */

function focusWindow ( name = false, title = false, launch = true ) {

  const window = findWindow ( Space.active ().windows (), name, title );

  if ( window ) {

    window.focus ();

  } else if ( launch ) {

    if ( _.isFunction ( launch ) ) {

      launch ();

    } else {

      App.launch ( name ).focus ();

    }

  }

}
