
/* VSCODE */

setEventHandler ( 'windowDidOpen', magicVSCodeOpen );

/* HELPERS */

function magicVSCodeOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/Code/.test ( name ) ) return;

  setFrame ( 'right', window );

}
