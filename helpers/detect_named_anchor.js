
/* DETECT NAMED ANCHOR */

function detectNamedAnchor ( x, y, threshold ) {

  const anchors = ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'];

  for ( const anchor of anchors ) {

    if ( isAnchored ( x, y, anchor, anchor, threshold ) ) return anchor;

  }

}
