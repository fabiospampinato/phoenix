
/* WORKSPACE */

let lastWorkspaceTimestamp = 0;

setHandler ( 'f18', [], () => {

  const timestamp = Date.now ();

  if ( timestamp - lastWorkspaceTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastWorkspaceTimestamp = 0;

    updateSpacesList ();

    osascript ( `tell application "Alfred 3" to search "spaces "` );

  } else {

    lastWorkspaceTimestamp = timestamp;

  }

});
