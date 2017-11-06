
/* WRITE FILE */

function writeFile ( path, content, callback = _.noop ) {

  Task.run ( SHELL_PATH, ['-c', `echo '${content}' > ${path}`], callback );

}
