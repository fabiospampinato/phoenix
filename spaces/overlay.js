
/* OVERLAY */

//TODO: Document this
//TODO: Add an icon showing `currentIndex/totalLength`

setEventHandler('spaceDidChange', () => {

  if (!spacesListRaw || !spacesListRaw.items) return;

  const space = Space.active(),
    index = new SpaceManager().getSpaceIndex(space);

  if (index === -1) return;

  new Alert().show(_.get(spacesListRaw, ['items', index, 'title'], 'Full Screen'), undefined, SPACES_OVERLAY_DURATION);

});
