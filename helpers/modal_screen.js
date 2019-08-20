
/* MODAL SCREEN */

function modalScreen ( options, screen = Screen.main () ) {

  const frame = screen.flippedFrame ();

  options.origin = function ( mFrame ) {
    return {
      x: frame.x + ( frame.width / 2 ) - ( mFrame.width / 2 ),
      y: ( frame.height / 2 ) - ( mFrame.height / 2 )
    };
  };

  modal ( options );

}
