
/* GROW FRAME */

function growFrame ( ...growth ) {

  const window = Window.focused ();

  if ( !window ) return;

  const frame = window.frame (),
        newFrame = ['x', 'y', 'width', 'height'].reduce ( ( acc, key, index ) => {
          return _.set ( acc, key, Math.max ( 0, frame[key] + growth[index] ) );
        }, {} );

  if ( growth[0] && frame.x === newFrame.x ) return;
  if ( growth[1] && frame.y === newFrame.y ) return;

  window.setFrame ( newFrame );

}
