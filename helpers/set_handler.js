
/* SET HANDLER */

function setHandler ( key, modifier, handler, handlerArgs = [], skipRepetitions = true ) {

  HANDLERS.push ( Key.on ( key, modifier, ( identifier, repeated ) => {

    if ( repeated && skipRepetitions ) return;

    handler ( ...handlerArgs )

  }));

}
