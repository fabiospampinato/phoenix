
/* IS ANCHORED */

function isAnchored ( pointX, pointY, anchorX, anchorY ) {

  if ( _.isString ( anchorX ) ) return isAnchored ( pointX, pointY, ...getNamedAnchor ( anchorX ) );

  if ( anchorX === false && anchorY === false ) return false;

  const frame = Screen.main ().flippedFrame ();

  if ( anchorX === false ) return Math.abs ( pointY - ( frame.height * anchorY ) ) < 2;

  if ( anchorY === false ) return Math.abs ( pointX - ( frame.width * anchorX ) ) < 2;

  return Math.hypot ( pointX - ( frame.width * anchorX ), pointY - ( frame.height * anchorY ) ) < 10;

}
