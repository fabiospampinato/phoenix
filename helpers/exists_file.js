
/* EXISTS FILE */

function existsFile ( path, callback = _.noop ) {

  shell ( `[[ -e '${path}' ]] && echo "yes" || echo "no"`, ({ output }) => {

    const hasFile = ( output.trim () === 'yes' );

    callback ( hasFile );

  });

}
