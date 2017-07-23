
/* WORKSPACE */

let lastWorkspaceTimestamp = 0;

setHandler ( 'f18', [], () => {

  const timestamp = Date.now ();

  if ( timestamp - lastWorkspaceTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastWorkspaceTimestamp = 0;

    updateSpace ();

    osascript ( `tell application "Alfred 3" to search "spaces "` );

  } else {

    lastWorkspaceTimestamp = timestamp;

  }

});
