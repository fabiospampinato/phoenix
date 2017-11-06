
/* TERMINAL */ //FIXME: sometimes doesn't detect the terminal (no `windowDidOpen` event)

setEventHandler ( 'windowDidOpen', magicTerminalOpen );

/* HANDLER */

function magicTerminalOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Terminal/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
