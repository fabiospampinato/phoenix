
/* EXPAND */

const expansionCache = {};

setKeyHandler ( 'space', HYPER, () => {

  const window = Window.focused ();

  if ( !window ) return;

  const screen = Screen.main (),
        sFrame = screen.flippedVisibleFrame (),
        hash = window.hash (),
        currFrame = window.frame (),
        prevFrame = expansionCache[hash],
        expanding = currFrame.width < sFrame.width || ( currFrame.height + 6 ) < sFrame.height; //FIXME: The setted height might be lower than the actual available height

  if ( expanding ) {

    expansionCache[hash] = currFrame;

    const nextFrame = {
      x: sFrame.x,
      y: sFrame.y,
      width: sFrame.width,
      height: sFrame.height
    };

    window.setFrame ( nextFrame );

  } else {

    delete expansionCache[hash];

    if ( prevFrame ) {

      window.setFrame ( prevFrame );

    } else {

      const nextFrame = {
        x: sFrame.x,
        y: sFrame.y,
        width: CENTER_WIDTH,
        height: CENTER_HEIGHT
      };

      window.setFrame ( nextFrame );

      center_window ( window );

    }

  }

});
