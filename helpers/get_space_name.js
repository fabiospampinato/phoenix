
/* GET SPACE NAME */

function getSpaceName ( space, index ) {

  if ( space ) {

    const vscode = space.windows ().find ( window => /Code/.test ( window.app ().name () ) );

    if ( vscode ) {

      const title = vscode.title ();

      return _.last ( title.split ( ' — ' ) );

    }

  }

  if ( _.isNumber ( index ) ) {

    return index ? `Space ${index + 1}` : 'Home';

  }

  return 'Unnamed Space';

}
