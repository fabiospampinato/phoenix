
/* EXPAND */

const expansionCache = {};

setHandler ( 'space', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  const screen = Screen.main (),
        sFrame = screen.flippedVisibleFrame (),
        hash = window.hash (),
        currFrame = window.frame (),
        prevFrame = expansionCache[hash],
        expanding = !prevFrame || currFrame.width < sFrame.width || ( currFrame.height + 6 ) < sFrame.height, //FIXME: The setted height might be lower than the actual available height
        nextFrame = expanding ? {
          x: 0,
          y: 0,
          width: 123123132,
          height: 123123
        } : prevFrame;

  if ( expanding ) {

    expansionCache[hash] = currFrame;

  } else {

    delete expansionCache[hash];

  }

  window.setFrame ( nextFrame );

});
