
/* SNAPPING */

let isSnapping = false,
    snappingFrame = {};

setEventHandler ( 'mouseDidLeftDrag', () => {

  if ( isSnapping ) return;

  const window = Window.focused ();

  if ( !window ) return;

  isSnapping = true;

  snappingFrame = window.frame ();

  setEventHandler ( 'mouseDidLeftClick', ({ x, y }) => {

    isSnapping = false;

    const window = Window.focused ();

    if ( !window ) return;

    const frame = window.frame ();

    if ( frame.x === snappingFrame.x && frame.y === snappingFrame.y ) return;

    if ( frame.width !== snappingFrame.width || frame.height !== snappingFrame.height ) return;

    const name = detectNamedAnchor ( x, y );

    if ( !name ) return;

    setFrame ( name );

  }, true );

});
