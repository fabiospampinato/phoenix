
/* TERMINAL */ //FIXME: sometimes doesn't detect the terminal (no windowDidOpen event)

handlers.push ( Event.on ( 'windowDidOpen', window => {

  if ( !/Terminal/.test ( window.app ().name () ) ) return;

  setFrame ( 0, .5, .4, .5, window ); // Bottom-Left

}));
