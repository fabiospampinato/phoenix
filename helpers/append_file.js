
/* APPEND FILE */

function appendFile ( path, content, callback = _.noop ) {

  shell ( `echo '${content}' >> ${path}`, callback );

}
