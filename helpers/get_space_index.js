
/* GET SPACE INDEX */

function getSpaceIndex ( space = Space.active () ) {

  return Space.all ().findIndex ( s => s.isEqual ( space ) );

}
