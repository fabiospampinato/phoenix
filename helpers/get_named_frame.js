
/* GET NAMED FRAME */

function getNamedFrame ( name ) {

  const dLeft = ( LEFT_WIDTH_PERCENTAGE - 50 ) / 100;

  switch ( name ) {
    /* SIDES */
    case 'top': return [0, 0, 1, .5];
    case 'right': return [.5 + dLeft, 0, .5 - dLeft, 1];
    case 'bottom': return [0, .5, 1, .5];
    case 'left': return [0, 0, .5 + dLeft, 1];
    /* CORNERS */
    case 'top-left': return [0, 0, .5 + dLeft, .5];
    case 'top-right': return [.5 + dLeft, 0, .5 - dLeft, .5];
    case 'bottom-right': return [.5 + dLeft, .5, .5 - dLeft, .5];
    case 'bottom-left': return [0, .5, .5 + dLeft, .5];
    /* HALVES */
    case 'half-1': return [0, 0, 1/2, 1];
    case 'half-2': return [1/2, 0, 1/2, 1];
    /* THIRDS */
    case 'third-1': return [0, 0, 1/3, 1];
    case 'third-2': return [1/3, 0, 1/3, 1];
    case 'third-3': return [2/3, 0, 1/3, 1];
    /* DEFAULT */
    default: throw new Error ( `Undefined frame named: "${name}"` );
  }

}
