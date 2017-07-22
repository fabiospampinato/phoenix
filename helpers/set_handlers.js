
/* SET HANDLERS */

function setHandlers ( handler, datas ) {

  datas.forEach ( data => {

    const [key, modifier, handlerArgs] = data;

    setHandler ( key, modifier, handler, handlerArgs || [] );

  });

}
