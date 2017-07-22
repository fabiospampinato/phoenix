
/* LOG */

function log ( obj ) {

  Phoenix.log ( JSON.stringify ( obj, undefined, 2 ) || obj.toString () );

}
