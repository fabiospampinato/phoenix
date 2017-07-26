
/* VSCODE */

setEventHandler ( 'windowDidOpen', magicVSCodeOpen );

/* HELPERS */

function magicVSCodeOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  if ( !/Code/.test ( window.app ().name () ) ) return;

  setFrame ( .4, 0, .6, 1, window ); // Right

}
