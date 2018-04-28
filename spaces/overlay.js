
/* OVERLAY */

//TODO: Document this
//TODO: Add an icon showing `currentIndex/totalLength`

setEventHandler ( 'spaceDidChange', () => {

  if ( !spacesListRaw || !spacesListRaw.items ) return;

  const space = Space.active (),
        index = getSpaceIndex ( space );

  if ( index === -1 ) return;

  alert ( spacesListRaw.items[index].title, undefined, SPACES_OVERLAY_DURATION );

});
