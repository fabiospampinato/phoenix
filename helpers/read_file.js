
/* READ FILE */

function readFile ( path, callback = _.noop ) {

  Task.run ( SHELL_PATH, ['-c', `cat ${path}`], ({ output }) => callback ( output ) );

}
