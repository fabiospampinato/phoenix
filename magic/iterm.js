
/* HYPER */

setEventHandler ( 'windowDidOpen', magiciTermOpen );

/* HANDLER */

function magiciTermOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/iTerm/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
