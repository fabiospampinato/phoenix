
/* FINDER */

handlers.push ( Event.on ( 'windowDidOpen', window => {

  if ( !/Finder/.test ( window.app ().name () ) ) return;

  setFrame ( 0, .5, .4, .5, window ); // Bottom-Left

}));
