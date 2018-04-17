
/* SWITCH SPACE */

function switchSpace ( modifier, wrap = SPACES_SWITCH_WRAP ) {

  const spaces = Space.all ();

  if ( spaces.length < 2 ) return; // Nothing to switch to

  const activeSpace = Space.active (),
        activeWindows = activeSpace.windows (),
        activeIndex = _.findIndex ( spaces, otherSpace => activeSpace.isEqual ( otherSpace ) );

  let nextIndex = activeIndex + modifier;

  if ( nextIndex < 0 || nextIndex >= spaces.length ) {

    if ( !wrap ) return;

    nextIndex = ( nextIndex < 0 ) ? spaces.length + nextIndex : nextIndex % spaces.length;

  }

  const script = `tell application "System Events" to key code {${index2keycode ( nextIndex )}} using {control down, option down, command down, shift down}`;

  osascript ( script );

}
