
/* OVERLAY */

//TODO: Document this
//TODO: Add an icon showing `currentIndex/totalLength`

setEventHandler ( 'spaceDidChange', () => {

  if ( !spacesListRaw || !spacesListRaw.items ) return;

  const space = Space.active (),
        index = getSpaceIndex ( space );

  if ( index === -1 ) return;

  alert ( _.get ( spacesListRaw, ['items', index, 'title'], 'Full Screen' ), undefined, SPACES_OVERLAY_DURATION );

});
