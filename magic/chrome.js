
/* CHROME */

setEventHandler ( 'windowDidOpen', window => {

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Google Chrome/.test ( name ) ) return;

  if ( /(chrome-devtools)|(Developer Tools - )/.test ( title ) ) return;

  setFrame ( 0, 0, .4, 1, window ); // Left

});
