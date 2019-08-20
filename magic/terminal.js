
/* TERMINAL */

setEventHandler ( 'windowDidOpen', magicTerminalOpen ); //FIXME: Doesn't seem to be working

/* HANDLER */

function magicTerminalOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/Terminal/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
