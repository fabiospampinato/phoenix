
/* CHROME */

setEventHandler ( 'windowDidOpen', magicChromeOpen );

/* HELPERS */

function magicChromeOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name ();

  if ( !/Google Chrome/.test ( name ) ) return;

  const title = window.title ();

  if ( /(chrome-devtools)|(Developer Tools - )/.test ( title ) ) return;

  setFrame ( 'left', window );

}
