
/* EXISTS FILES */

function existsFiles ( paths, callback = _.noop ) {

  if ( !paths.length ) return callback ( false );

  const [current, ...remaining] = paths;

  existsFile ( current, hasFile => {

    if ( hasFile ) return callback ( true );

    existsFiles ( remaining, callback );

  });

}
