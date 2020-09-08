
/* INFO */

setKeyHandler ( 'i', HYPER, () => {

  const windows = Space.active ().windows ();

  windows.forEach ( window => {

    if ( !window.isVisible () || !window.title () ) return;

    modalWindow ( {}, window );

  });

});

setKeyHandler ( 'i', HYPER_SHIFT, () => {

  const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        daysNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        pad = x => `00${x}`.slice ( -2 );

  const date = new Date (),
        hours = pad ( date.getHours () ),
        minutes = pad ( date.getMinutes () ),
        seconds = pad ( date.getSeconds () ),
        wday = daysNames[date.getDay ()],
        day = date.getDate (),
        month = monthsNames[date.getMonth ()],
        year = date.getFullYear ();

  const info = `${hours}:${minutes}:${seconds} - ${wday} - ${day} ${month} ${year}`;

  alert ( info );

});
