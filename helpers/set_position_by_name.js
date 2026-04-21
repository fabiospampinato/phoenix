
/* SET POSITION BY NAME */

function setPositionByName ( name, window = Window.focused () ) {

  if ( !window ) return;

  const screen = getWindowScreen ( window );
  const visibleFrame = screen.flippedVisibleFrame ();
  const fullFrame = screen.flippedFrame ();

  const [fx, fy, fw, fh] = getFrameByName ( name );
  const [ax, ay] = getAnchorByName ( name );

  const width = visibleFrame.width * fw;
  const height = visibleFrame.height * fh;

  const x = ax === 0 ? fullFrame.x : ( ax === 1 ? fullFrame.x + fullFrame.width - width : visibleFrame.x + ( visibleFrame.width * fx ) );
  const y = ay === 0 ? fullFrame.y : ( ay === 1 ? fullFrame.y + fullFrame.height - height : visibleFrame.y + ( visibleFrame.height * fy ) );

  window.setFrame ({ x, y, width, height });

}
