
/* GET GAP BY NAME */

function getGapByName ( name ) {

  const h1 = Math.floor ( GAP_AMOUNT / 2 ); // right/bottom inset gap
  const h2 = Math.ceil  ( GAP_AMOUNT / 2 ); // top/left inset gap

  switch ( name ) {
    /* SIDES */
    case 'top':          return [0,  0,  h2, 0 ];
    case 'right':        return [0,  0,  0,  h1];
    case 'bottom':       return [h1, 0,  0,  0 ];
    case 'left':         return [0,  h2, 0,  0 ];
    /* CORNERS */
    case 'top-left':     return [0,  h2, h2, 0 ];
    case 'top-right':    return [0,  0,  h2, h1];
    case 'bottom-right': return [h1, 0,  0,  h1];
    case 'bottom-left':  return [h1, h2, 0,  0 ];
    /* HALVES */
    case 'half-1':       return [0,  h2, 0,  0 ];
    case 'half-2':       return [0,  0,  0,  h1];
    /* THIRDS */
    case 'third-1':      return [0,  h2, 0,  0 ];
    case 'third-2':      return [0,  h2, 0,  h1];
    case 'third-3':      return [0,  0,  0,  h1];
    /* QUARTERS */
    case 'quarter-1':    return [0,  h2, h2, 0 ];
    case 'quarter-2':    return [0,  0,  h2, h1];
    case 'quarter-3':    return [h1, h2, 0,  0 ];
    case 'quarter-4':    return [h1, 0,  0,  h1];
    /* SIXTHS */
    case 'sixths-1':     return [0,  h2, h2, 0 ];
    case 'sixths-2':     return [0,  h2, h2, h1];
    case 'sixths-3':     return [0,  0,  h2, h1];
    case 'sixths-4':     return [h1, h2, 0,  0 ];
    case 'sixths-5':     return [h1, h2, 0,  h1];
    case 'sixths-6':     return [h1, 0,  0,  h1];
    /* DEFAULT */
    default: throw new Error ( `Undefined gap named: "${name}"` );
  }

}
