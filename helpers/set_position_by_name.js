
/* SET POSITION BY NAME */

function setPositionByName ( name, window = Window.focused () ) {

  if ( !window ) return;

  const screen = getWindowScreen ( window );
  const visibleFrame = screen.flippedVisibleFrame ();
  const fullFrame = screen.flippedFrame ();

  const [fx, fy, fw, fh] = getFrameByName ( name );
  const [ax, ay] = getAnchorByName ( name );
  const [gTop, gRight, gBottom, gLeft] = getGapByName ( name );

  const width = visibleFrame.width * fw - gLeft - gRight;
  const height = visibleFrame.height * fh - gTop - gBottom;

  const x = ax === 0 ? fullFrame.x : ( ax === 1 ? fullFrame.x + fullFrame.width - width - gRight : visibleFrame.x + ( visibleFrame.width * fx ) + gLeft );
  const y = ay === 0 ? fullFrame.y : ( ay === 1 ? fullFrame.y + fullFrame.height - height - gBottom : visibleFrame.y + ( visibleFrame.height * fy ) + gTop );

  window.setFrame ({ x, y, width, height });

}
