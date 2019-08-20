
/* HYPER */

setEventHandler ( 'windowDidOpen', magiciTermOpen ); //FIXME: Doesn't seem to be working

/* HANDLER */

function magiciTermOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/iTerm/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
