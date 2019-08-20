
/* OVERLAY */

//TODO: Document this
//TODO: Add an icon showing `currentIndex/totalLength`

setEventHandler ( 'spaceDidChange', () => {

  if ( !spacesListRaw || !spacesListRaw.items ) return;

  const space = Space.active (),
        index = getSpaceIndex ( space );

  if ( index === -1 ) return;

  modalScreen ({
    text: _.get ( spacesListRaw, ['items', index, 'title'], 'Full Screen' ),
    duration: SPACES_OVERLAY_DURATION
  });

});
