
/* GET SPACE NAME */

function getSpaceName ( space, index ) {

  const vscode = space.windows ().find ( window => /Code/.test ( window.app ().name () ) );

  if ( vscode ) {

    const title = vscode.title ();

    return _.last ( title.split ( ' — ' ) );

  }

  return index ? `Space ${index + 1}` : 'Home';

}
