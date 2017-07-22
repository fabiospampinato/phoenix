
/* EXPAND */

const expansionCache = {};

setHandler ( 'space', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  const hash = window.hash (),
        currFrame = window.frame (),
        prevFrame = expansionCache[hash],
        expanding = !prevFrame,
        nextFrame = prevFrame || {
          x: 0,
          y: 0,
          width: Infinity,
          height: Infinity
        };

  if ( expanding ) {

    expansionCache[hash] = currFrame;

  } else {

    delete expansionCache[hash];

  }

  window.setFrame ( nextFrame );

});
