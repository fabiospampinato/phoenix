
/* READ FILE */

function readFile ( path, callback = _.noop ) {

  Task.run ( '/bin/bash', ['-c', `cat ${path}`], ({ output }) => callback ( output ) );

}
