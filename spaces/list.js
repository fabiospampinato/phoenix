
/* INIT */

let spacesList;

readList ( () => {

  updateSpacesList ();

  setEventHandler ( 'spaceDidChange', updateSpacesList );
  setEventsHandler ( ['windowDidOpen', 'windowDidClose'], updateWindow );

});

/* LIST */

function readList ( callback = _.noop ) {

  readFile ( SPACES_LIST_PATH, content => {

    const parsed = _.attempt ( JSON.parse, content );

    spacesList = _.isError ( parsed ) ? { items: [] } : parsed;

    callback ();

  });

}

function writeList ( callback = _.noop ) {

  const str = JSON.stringify ( spacesList, undefined, JSON_INDENTATION ) || '{}',
        content = str.replace ( "'", "\\'" );

  writeFile ( SPACES_LIST_PATH, content, callback );

}

/* UPDATE */

let cycleIteration = 0, cycleInterval;

function updateSpaceCycle ( iteration = cycleIteration, interval = SPACES_UPDATE_INTERVAL, limit = SPACES_UPDATE_CYCLES ) {

  if ( iteration === 0 ) { // Iterations start

    cycleIteration = 0;

    if ( cycleInterval ) clearInterval ( cycleInterval );

    cycleInterval = setInterval ( () => updateSpaceCycle ( undefined, undefined, limit ), interval );

  }

  if ( cycleIteration >= limit ) { // Iteration end

    clearInterval ( cycleInterval );

    return;

  } else { // Iteration

    const updated = updateSpace ();

    if ( updated ) clearInterval ( cycleInterval );

    cycleIteration++;

  }

}

function updateSpacesList () {

  updateSpaces ();
  updateSpace ();

}

function updateSpaces () {

  const spaces = Space.all (),
        list = {};

  list.items = spaces.map ( ( space, index ) => {

    const hash = space.hash (),
          prevItem = spacesList.items.find ( item => item.hash === hash );

    return prevItem || getSpaceItem ( space, index );

  });

  if ( _.isEqual ( list, spacesList ) ) return;

  spacesList = list;

  writeList ();

}

function updateSpace ( space, index ) {

  if ( !space ) space = Space.active ();

  if ( !Space.active ().isEqual ( space ) ) return false; // We can't get windows from inactive spaces

  if ( _.isUndefined ( index ) ) index = getSpaceIndex ( space );

  const item = getSpaceItem ( space, index );

  if ( _.isEqual ( spacesList.items[index], item ) ) return false;

  spacesList.items[index] = item;

  writeList ();

  return true;

}

function updateWindow ( window ) {

  if ( !window.isNormal () ) return;

  updateSpaceCycle ( 0 ); // It may take a bit for the window's title to get updated

}

/* GET */

function getSpaceItem ( space, index ) {

  return {
    title: getSpaceName ( space, index ),
    arg: index2keycode ( index ),
    hash: space.hash ()
  };

}
