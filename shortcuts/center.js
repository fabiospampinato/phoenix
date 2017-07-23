
/* CENTER */

setHandler ( 'x', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  center_window ( window );

});

setHandler ( 'x', HYPER_SHIFT, () => {

  const window = Window.focused ();

  if ( !window ) return;

  window.setFrame ({
    x: 0,
    y: 0,
    width: 900,
    height: 600
  });

  center_window ( window );

});
