
/* INIT */

let spacesListRaw,
    spacesList,
    spacesListScreenHash;

readListRaw ( () => {

  updateSpacesLists ();

  setEventHandler ( 'spaceDidChange', updateSpacesLists );
  setEventsHandler ( ['windowDidOpen', 'windowDidClose'], updateWindow );

});

/* LIST */

function readListRaw ( callback = _.noop ) {

  readJSON ( SPACES_LIST_RAW_PATH, { items: [] }, obj => {

    spacesListRaw = obj;

    callback ();

  });

}

function writeListRaw ( callback = _.noop ) {

  writeJSON ( SPACES_LIST_RAW_PATH, spacesListRaw, callback );

}

function writeList ( callback = _.noop ) {

  const screen_hash = Screen.main ().hash ();

  spacesList = _.cloneDeep ( spacesListRaw );

  spacesList.items = spacesList.items.filter ( item => item.screens_hashes.includes ( screen_hash ) );

  writeJSON ( SPACES_LIST_PATH, spacesList, callback );

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

function updateSpacesListRaw () {

  updateSpaces ();
  updateSpace ();

}

function updateSpacesList () {

  writeList ();

}

function updateSpacesLists () {

  updateSpacesListRaw ();
  updateSpacesList ();

}

function updateSpaces () {

  const spaces = Space.all (),
        list = {};

  list.items = spaces.map ( ( space, index ) => {

    const space_hash = space.hash (),
          screens = space.screens (),
          prevItem = spacesListRaw.items.find ( item => item.space_hash === space_hash );

    return prevItem || getSpaceItem ( space, index, screens );

  });

  if ( _.isEqual ( list, spacesListRaw ) ) return;

  spacesListRaw = list;

  writeListRaw ();

}

function updateSpace ( space, index, screens ) {

  if ( !space ) space = Space.active ();

  if ( !screens ) screens = space.screens ();

  if ( !Space.active ().isEqual ( space ) ) return false; // We can't get windows from inactive spaces

  if ( _.isUndefined ( index ) ) index = getSpaceIndex ( space );

  const item = getSpaceItem ( space, index, screens );

  if ( _.isEqual ( spacesListRaw.items[index], item ) ) return false;

  spacesListRaw.items[index] = item;

  writeListRaw ();

  return true;

}

function updateWindow ( window ) {

  if ( !window.isNormal () ) return;

  updateSpaceCycle ( 0 ); // It may take a bit for the window's title to get updated

}

/* GET */

function getSpaceItem ( space, index, screens ) {

  return {
    title: getSpaceName ( space, index ),
    arg: index2keycode ( index ),
    space_hash: space.hash (),
    screens_hashes: screens.map ( screen => screen.hash () )
  };

}
