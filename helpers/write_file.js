
/* WRITE FILE */

function writeFile ( path, content, callback = _.noop ) {

  shell ( `echo '${content}' > ${path}`, callback );

}
