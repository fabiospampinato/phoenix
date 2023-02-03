
/* GET SPACE INDEX */

function getSpaceIndex ( space = Space.active () ) {

  return Space.all ().findIndex ( other => other.isEqual ( space ) );

}
