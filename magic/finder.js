
/* FINDER */

setEventHandler ( 'windowDidOpen', window => {

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Finder/.test ( name ) || !title || /(Quick Look)|(Finder Preferences)|( Info)/.test ( title ) ) return;

  setFrame ( 0, .5, .4, .5, window ); // Bottom-Left

});
