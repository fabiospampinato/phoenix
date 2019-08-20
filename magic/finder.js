
/* FINDER */

setEventHandler ( 'windowDidOpen', magicFinderOpen );

/* HELPERS */

function magicFinderOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/Finder/.test ( name ) ) return;

  const title = window.title ();

  if ( !title || /(Quick Look)|(About Finder)|(Finder Preferences)|( Info$)/.test ( title ) ) return;

  setFrame ( 'bottom-left', window );

}
