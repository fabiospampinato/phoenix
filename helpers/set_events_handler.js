
/* SET EVENTS HANDLER */

function setEventsHandler ( events, handler, one = false ) {

  events.forEach ( event => setEventHandler ( event, handler, one ) );

}
