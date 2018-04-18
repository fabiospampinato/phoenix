
/* OVERLAY */

//TODO: Document this
//TODO: Add an icon showing `currentIndex/totalLength`

setEventHandler ( 'spaceDidChange', () => {

  if ( !spacesList || !spacesList.items ) return;

  const space = Space.active (),
        index = Space.all ().findIndex ( s => s.isEqual ( space ) );

  if ( index === -1 ) return;

  alert ( spacesList.items[index].title, undefined, SPACES_OVERLAY_DURATION );

});
