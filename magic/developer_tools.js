
/* DEVELOPER TOOLS */

let hashes = [];

setEventHandler ( 'windowDidOpen', magicDeveloperToolsOpen );
setEventHandler ( 'windowDidClose', magicDeveloperToolsClose );

/* HELPERS */

function isWindowDeveloperTools ( window, checkHash = false ) {

  if ( checkHash ) {

    return _.includes ( hashes, window.hash () );

  } else {

    if ( !window.isNormal () || !window.isMain () ) return false;

    const name = window.app ().name ();

    if ( !/Google Chrome/.test ( name ) ) return false;

    const title = window.title ();

    if ( !/(chrome-devtools)|(Developer Tools - )/.test ( title ) ) return false;

    return true;

  }

}

function magicDeveloperToolsOpen ( window ) {

  if ( !isWindowDeveloperTools ( window ) ) return;

  hashes.push ( window.hash () );

  setFrame ( 'bottom-right', window );

  growVSCHeight ( - DEVTOOLS_SHRINK_HEIGHT );

}

function magicDeveloperToolsClose ( window ) {

  if ( !isWindowDeveloperTools ( window, true ) ) return;

  hashes = _.without ( hashes, window.hash () );

  if ( Space.active ().windows ().find ( isWindowDeveloperTools ) ) return; // Avoiding unnecessary growth

  growVSCHeight ( DEVTOOLS_SHRINK_HEIGHT );

}

function growVSCHeight ( growth ) {

  const vscode = Space.active ().windows ().find ( window => /Code/.test ( window.app ().name () ) );

  if ( !vscode ) return;

  const screen = vscode.screen (),
        screenFrame = screen.flippedVisibleFrame (),
        maxHeight = screenFrame.height,
        minHeight = maxHeight - Math.abs ( growth ),
        frame = vscode.frame (),
        height = frame.height + growth;

  if ( height > maxHeight || height < minHeight ) return; // Avoiding unnecessary growth/shrink

  frame.height = height;

  vscode.setFrame ( frame );

}
