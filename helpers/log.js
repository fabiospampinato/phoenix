
/* LOG */

function log ( obj ) {

  const str = obj ? JSON.stringify ( obj, undefined, 2 ) || obj.toString () : obj;

  Phoenix.log ( str );

}
