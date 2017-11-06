
/* SET FRAME */

function setFrame ( x, y, width, height, window = Window.focused () ) {

  if ( _.isString ( x ) ) return setFrame ( ...getNamedFrame ( x ), y || window );

  if ( !window ) return;

  const screen = window.screen (),
        frame = screen.flippedVisibleFrame ();

  window.setFrame ({
    x: frame.x + ( frame.width * x ),
    y: frame.y + ( frame.height * y ),
    width: frame.width * width,
    height: frame.height * height
  });

}
