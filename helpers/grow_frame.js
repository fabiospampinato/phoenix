
/* GROW FRAME */

function growFrame ( x, y, width, height, window = Window.focused () ) { //FIXME: Multi-monitor support

  if ( !window ) return false;

  const screen = getFocusedScreen ( window );
  const sFrame = screen.flippedFrame ();
  const svFrame = screen.flippedVisibleFrame ();
  const yUnusable = sFrame.height - svFrame.height;
  const frame = window.frame ();
  const newFrame = _.cloneDeep ( frame );

  //FIXME: We are leveraging the fact that in the current use case `x` and `y` are always negatives, while `width` and `height` are always positives

  if ( x ) newFrame.x = _.clamp ( frame.x + x, sFrame.x, sFrame.x + sFrame.width );
  if ( y ) newFrame.y = _.clamp ( frame.y + y, yUnusable, yUnusable + svFrame.height );
  if ( width ) newFrame.width = Math.min ( x ? frame.x + frame.width : sFrame.width - frame.x, frame.width + ( width - ( Math.abs ( x ) - Math.abs ( frame.x - newFrame.x ) ) ) );
  if ( height ) newFrame.height = Math.min ( y ? frame.y + frame.height : sFrame.height - frame.y, frame.height + ( height - ( Math.abs ( y ) - Math.abs ( frame.y - newFrame.y ) ) ) );

  if ( _.isEqual ( frame, newFrame ) ) {

    return false;

  } else {

    window.setFrame ( newFrame );

    return true;

  }

}

function growOrShrinkFrame ( deltasGrow, deltasShrink, window = Window.focused () ) {

  const grown = growFrame ( ...deltasGrow, window );

  if ( grown ) return 1;

  const shrunk = growFrame ( ...deltasShrink, window );

  if ( shrunk ) return -1;

  return 0;

}
