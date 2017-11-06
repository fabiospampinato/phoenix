
/* LOG */

function log ( obj ) {

  const str = obj ? JSON.stringify ( obj, undefined, JSON_INDENTATION ) || obj.toString () : obj;

  Phoenix.log ( str );

}
