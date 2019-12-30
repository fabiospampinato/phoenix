
/* SET EVENT HANDLER */

function setEventHandler(event, handler) {

  Logger.log(event, handler);

  HANDLERS.push(Event.on(event, handler));

}
