
/* HYPER */

setEventHandler ( 'windowDidOpen', magicHyperOpen ); //FIXME: Doesn't seem to be working

/* HANDLER */

function magicHyperOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Hyper/.test ( name ) || false ) return;

  setFrame ( 'bottom-left', window );

}
