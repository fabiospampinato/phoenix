
/* SET ANCHOR */

function setAnchor ( x, y, window = Window.focused () ) {

  if ( _.isString ( x ) ) return setAnchor ( ...getNamedAnchor ( x ), y || window );

  if ( !window ) return;

  if ( x === false && y === false ) return;

  const screen = window.screen (),
        frame = screen.flippedFrame (),
        wFrame = window.frame ();

  const nextFrame = {
    x: x === 0 ? 0 : ( x === 1 ? frame.width - wFrame.width : wFrame.x ),
    y: y === 0 ? 0 : ( y === 1 ? frame.height - wFrame.height : wFrame.y ),
    width: wFrame.width,
    height: wFrame.height
  };

  if ( _.isEqual ( frame, nextFrame ) ) return;

  window.setFrame ( nextFrame );

}
