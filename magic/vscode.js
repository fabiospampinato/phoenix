
/* VSCODE */

setEventHandler ( 'windowDidOpen', window => {

  if ( !/Code/.test ( window.app ().name () ) ) return;

  setFrame ( .4, 0, .6, 1, window ); // Right

});
