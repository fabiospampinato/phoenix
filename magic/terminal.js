
/* TERMINAL */

setEventHandler ( 'windowDidOpen', magicTerminalOpen );

/* HANDLER */

function magicTerminalOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/Terminal/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
