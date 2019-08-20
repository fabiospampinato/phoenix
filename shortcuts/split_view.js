
/* SPLIT VIEW */

setKeyHandler ( '§', HYPER, () => {

  return alert ( 'Split View - Unimplemented' ); //FIXME

  const space = Space.active (),
        windows = space.windows ().filter ( window => window.isVisible () && window.title () ),
        isActive = space.isNormal ();

  if ( isActive ) {

    //TODO: Close it
    //TODO: Move all the windows to their previous window
    //TODO: Focus one of them

  } else {

    if ( windows.length !== 2 ) return alert ( 'Split View - Only works with 2 windows' );

    //TODO: Detect leftmost and rightmost windows
    //TODO: Maximize one of them
    //TODO: Move the other to its position

  }

});
