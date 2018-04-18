
/* WORKSPACE */

let lastWorkspaceTimestamp = 0;

setHandler ( 'f18', [], () => {

  const timestamp = Date.now ();

  if ( timestamp - lastWorkspaceTimestamp <= DOUBLE_KEY_INTERVAL ) {

    lastWorkspaceTimestamp = 0;

    updateSpacesList ();

    osascript ( `tell application "Alfred 3" to search "spaces "` );

    const index = getSpaceIndex ();

    if ( !SPACES_ALFRED_PRESELECT || !index ) return;

    osascript ( `
      delay ${SPACES_ALFRED_PRESELECT_DELAY}
      tell application "System Events"
        repeat ${index} times
          key code 125
        end repeat
      end tell
    ` );

  } else {

    lastWorkspaceTimestamp = timestamp;

  }

});
