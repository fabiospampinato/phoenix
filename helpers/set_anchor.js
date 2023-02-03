
/* SET ANCHOR */

function setAnchor ( x, y, window = Window.focused () ) {

  if ( _.isString ( x ) ) return setAnchor ( ...getNamedAnchor ( x ), y || window );

  if ( !window ) return;

  if ( x === false && y === false ) return;

  const screen = getWindowScreen ( window );
  const frame = screen.flippedFrame ();
  const wFrame = window.frame ();

  const nextFrame = {
    x: x === 0 ? frame.x : ( x === 1 ? frame.x + frame.width - wFrame.width : wFrame.x ),
    y: y === 0 ? frame.y : ( y === 1 ? frame.y + frame.height - wFrame.height : wFrame.y ),
    width: wFrame.width,
    height: wFrame.height
  };

  if ( _.isEqual ( frame, nextFrame ) ) return;

  window.setFrame ( nextFrame );

}
