
/* IS ANCHORED */

function isAnchored ( pointX, pointY, anchorX, anchorY ) {

  if ( _.isString ( anchorX ) ) return isAnchored ( pointX, pointY, ...getNamedAnchor ( anchorX ) );

  if ( anchorX === false && anchorY === false ) return false;

  const frame = getFocusedScreen ().flippedFrame ();

  if ( anchorX === false ) return Math.abs ( pointY - ( frame.y + frame.height * anchorY ) ) < 2;

  if ( anchorY === false ) return Math.abs ( pointX - ( frame.x + frame.width * anchorX ) ) < 2;

  return Math.hypot ( pointX - ( frame.x + frame.width * anchorX ), pointY - ( frame.y + frame.height * anchorY ) ) < 10;

}
