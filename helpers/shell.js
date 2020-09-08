
/* SHELL */

function shell ( command, callback = _.noop ) {

  Task.run ( SHELL_PATH, ['-ic', command], callback );

}
