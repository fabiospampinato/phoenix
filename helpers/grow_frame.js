
/* GROW FRAME */

function growFrame ( x, y, width, height, window = Window.focused () ) {

  if ( !window ) return;

  const screen = Screen.main (),
        sFrame = screen.flippedFrame (),
        svFrame = screen.flippedVisibleFrame (),
        yUnusable = sFrame.height - svFrame.height,
        frame = window.frame (),
        newFrame = _.cloneDeep ( frame );

  //FIXME: We are leveraging the fact that in the current use case `x` and `y` are always negatives, while `width` and `height` are always positives

  if ( x ) newFrame.x = Math.max ( 0, frame.x + x );
  if ( y ) newFrame.y = Math.max ( yUnusable, frame.y + y );
  if ( width ) newFrame.width = Math.min ( svFrame.width - newFrame.x, frame.width + ( width - ( Math.abs ( x ) - Math.abs ( frame.x - newFrame.x ) ) ) );
  if ( height ) newFrame.height = Math.min ( svFrame.height - ( newFrame.y - yUnusable ), frame.height + ( height - ( Math.abs ( y ) - Math.abs ( frame.y - newFrame.y ) ) ) );

  window.setFrame ( newFrame );

}
