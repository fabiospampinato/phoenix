
/* FINDER */

setEventHandler ( 'windowDidOpen', window => {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Finder/.test ( name ) ) return;

  if ( !title || /(Quick Look)|(About Finder)|(Finder Preferences)|( Info$)/.test ( title ) ) return;

  setFrame ( 0, .5, .4, .5, window ); // Bottom-Left

});
