
/* SHELL */

function shell ( command, callback = _.noop ) {

  return new Task ( SHELL_PATH, ['-ic', command], callback );

}
