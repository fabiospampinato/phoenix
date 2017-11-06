
/* OSASCRIPT */

function osascript ( script ) {

  Task.run ( OSASCRIPT_PATH, [ '-e', script ] );

}
