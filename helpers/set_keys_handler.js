
/* SET KEYS HANDLER */

function setKeysHandler ( handler, data, skipRepetitions = true, one = false ) {

  data.forEach ( data => {

    const [key, modifier, handlerArgs] = data;

    setKeyHandler ( key, modifier, handler, handlerArgs || [], skipRepetitions, one );

  });

}
