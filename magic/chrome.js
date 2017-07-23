
/* CHROME */

setEventHandler ( 'windowDidOpen', window => {

  if ( !( /Google Chrome/.test ( window.app ().name () ) && !/chrome-devtools/.test ( window.title () ) ) ) return;

  setFrame ( 0, 0, .4, 1, window ); // Left

});
