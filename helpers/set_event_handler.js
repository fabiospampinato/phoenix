
/* SET EVENT HANDLER */

function setEventHandler ( event, handler ) {

  HANDLERS.push ( Event.on ( event, handler ) );

}
