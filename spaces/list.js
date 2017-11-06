
/* INIT */

//TODO: Handle space addition/removal

let spacesList;

readList ( () => {

  updateSpaces ();

  setEventHandler ( 'spaceDidChange', () => updateSpace () );
  setEventsHandler ( ['windowDidOpen', 'windowDidClose'], updateWindow );

});

/* LIST */

function readList ( callback = _.noop ) {

  readFile ( '~/.config/phoenix/spaces/list.json', content => {

    const parsed = _.attempt ( JSON.parse, content );

    spacesList = _.isError ( parsed ) ? {} : parsed;

    callback ();

  });

}

function writeList ( callback = _.noop ) {

  if ( !spacesList ) return;

  const str = JSON.stringify ( spacesList, undefined, JSON_INDENTATION ) || '{}',
        content = str.replace ( "'", "\\'" );

  writeFile ( '~/.config/phoenix/spaces/list.json', content, callback );

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

function updateSpaces () {

  const spaces = Space.all ();

  if ( spacesList.items && spacesList.items.length === spaces.length ) return;

  spacesList.items = [];

  spaces.forEach ( ( space, index ) => updateSpace ( space, index, true, false ) );

  writeList ( spacesList );

}

function updateSpace ( space, index, force = false, write = true ) {

  if ( !space ) space = Space.active ();

  if ( !force && !Space.active ().isEqual ( space ) ) return false; // We can't get windows from inactive spaces

  if ( _.isUndefined ( index ) ) index = Space.all ().findIndex ( s => s.isEqual ( space ) );

  const item = {
    title: guessSpaceName ( space, index ),
    arg: index2keycode ( index )
  };

  if ( _.isEqual ( spacesList.items[index], item ) ) return false;

  spacesList.items[index] = item;

  if ( write ) writeList ();

  return true;

}

function updateWindow ( window ) {

  updateSpaceCycle ( 0 ); // It may take a bit for the window's title to get updated

}

/* HELPERS */

function index2keycode ( index ) {

  const keycodes = [18, 19, 20, 21, 23, 22, 26, 28, 25], // Corresponding to numbers from 1 to 9
        keycode = keycodes[index];

  return keycode ? `${keycode}` : ''; // Alfred wants a string, not a number

}

function guessSpaceName ( space, index ) {

  // if ( !index ) return 'Home';

  const vscode = space.windows ().find ( window => /Code/.test ( window.app ().name () ) );

  if ( vscode ) {

    const title = vscode.title ();

    return _.last ( title.split ( ' — ' ) );

  }

  return index ? `Space ${index + 1}` : 'Home';

}
