
/* WRITE JSON */

function writeJSON ( path, obj, callback = _.noop ) {

  const str = JSON.stringify ( obj, undefined, JSON_INDENTATION ) || '{}';
  const content = str.replace ( "'", "\\'" );

  writeFile ( path, content, callback );

}
