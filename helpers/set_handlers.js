
/* SET HANDLERS */

function setHandlers ( handler, datas, skipRepetitions = true ) {

  datas.forEach ( data => {

    const [key, modifier, handlerArgs] = data;

    setHandler ( key, modifier, handler, handlerArgs || [], skipRepetitions );

  });

}
