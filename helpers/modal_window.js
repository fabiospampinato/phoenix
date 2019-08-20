
/* MODAL WINDOW */

function modalWindow ( options, window = Window.focused () ) {

  const screen = window.screen (),
        app = window.app (),
        sFrame = screen.flippedFrame (),
        wFrame = window.frame ();

  options.origin = function ( mFrame ) {
    return {
      x: wFrame.x + ( wFrame.width / 2 ) - ( mFrame.width / 2 ),
      y: sFrame.height - ( wFrame.y + ( wFrame.height / 2 ) + ( mFrame.height / 2 ) )
    };
  };

  if ( _.isUndefined ( options.icon ) ) {

    options.icon = app.icon ();

  }

  modal ( options );

}
