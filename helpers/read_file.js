
/* READ FILE */

function readFile ( path, callback = _.noop ) {

  shell ( `cat ${path}`, ({ output }) => callback ( output ) );

}
