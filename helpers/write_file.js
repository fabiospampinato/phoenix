
/* WRITE FILE */

function writeFile ( path, content, callback = _.noop ) {

  Task.run ( '/bin/bash', ['-c', `echo '${content}' > ${path}`], callback );

}
