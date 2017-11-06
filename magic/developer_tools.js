
/* DEVELOPER TOOLS */

let hashes = [];

setEventHandler ( 'windowDidOpen', magicDeveloperToolsOpen );
setEventHandler ( 'windowDidClose', magicDeveloperToolsClose );

/* HELPERS */

function magicDeveloperToolsOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Google Chrome/.test ( name ) ) return;

  if ( !/(chrome-devtools)|(Developer Tools - )/.test ( title ) ) return;

  hashes.push ( window.hash () );

  setFrame ( 'bottom-right', window );

  growVSCHeight ( - DEVTOOLS_SHRINK_HEIGHT );

}

function magicDeveloperToolsClose ( window ) {

  const hash = window.hash ();

  if ( !_.includes ( hashes, hash ) ) return;

  hashes = _.without ( hashes, hash );

  growVSCHeight ( DEVTOOLS_SHRINK_HEIGHT );

}

function growVSCHeight ( growth ) {

  const vscode = Space.active ().windows ().find ( window => /Code/.test ( window.app ().name () ) );

  if ( !vscode ) return;

  const frame = vscode.frame (),
        newFrame = _.extend ( frame, {
          height: frame.height + growth
        });

  vscode.setFrame ( newFrame );

}
