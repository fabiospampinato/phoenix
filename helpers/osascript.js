
/* OSASCRIPT */

function osascript ( script, callback = _.noop ) {

  Task.run ( OSASCRIPT_PATH, [ '-e', script ], callback );

}
