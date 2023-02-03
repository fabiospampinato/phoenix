
/* MODAL WINDOW */

function modalWindow ( options, window = Window.focused () ) { //FIXME: Multi-monitor usage

  const screen = getWindowScreen ( window );
  const app = window.app ();
  const sFrame = screen.flippedFrame ();
  const wFrame = window.frame ();

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
