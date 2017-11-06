
/* CHROME */

setEventHandler ( 'windowDidOpen', magicChromeOpen );

/* HELPERS */

function magicChromeOpen ( window ) {

  if ( !window.isNormal () || !window.isMain () ) return;

  const name = window.app ().name (),
        title = window.title ();

  if ( !/Google Chrome/.test ( name ) ) return;

  if ( /(chrome-devtools)|(Developer Tools - )/.test ( title ) ) return;

  setFrame ( 'left', window );

}
