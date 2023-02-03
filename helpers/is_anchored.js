
/* IS ANCHORED */

function isAnchored ( pointX, pointY, anchorX, anchorY, threshold = 2 ) {

  if ( _.isString ( anchorX ) ) return isAnchored ( pointX, pointY, ...getNamedAnchor ( anchorX ), threshold );

  if ( anchorX === false && anchorY === false ) return false;

  const frame = getFocusedScreen ().flippedFrame ();

  if ( anchorX === false ) return Math.abs ( pointY - ( frame.y + frame.height * anchorY ) ) < threshold;

  if ( anchorY === false ) return Math.abs ( pointX - ( frame.x + frame.width * anchorX ) ) < threshold;

  return Math.hypot ( pointX - ( frame.x + frame.width * anchorX ), pointY - ( frame.y + frame.height * anchorY ) ) < ( threshold * 3 );

}
