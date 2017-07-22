
/* OSASCRIPT */

function osascript ( script ) {

  Task.run ( '/usr/bin/osascript', [ '-e', script ] );

}
