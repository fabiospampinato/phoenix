
/* SET KEYS HANDLER */

function setKeysHandler ( handler, datas, skipRepetitions = true, one = false ) {

  datas.forEach ( data => {

    const [key, modifier, handlerArgs] = data;

    setKeyHandler ( key, modifier, handler, handlerArgs || [], skipRepetitions, one );

  });

}
