
/* INFO */

setKeyHandler ( 'i', HYPER, () => {

  const windows = Space.active ().windows ();

  windows.forEach ( window => {

    if ( !window.isVisible () || !window.title () ) return;

    modalWindow ( {}, window );

  });

});

setKeyHandler ( 'i', HYPER_SHIFT, () => {

  shell ( 'pmset -g batt | grep -Eo "\\d+%" | cut -d% -f1', ( id, output ) => {

    shell ( 'music-current-name', ( id, songName ) => {

      shell ( 'music-current-status', ( id, songLiked, songDisliked ) => {

        const battery = output.trim ();

        const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const daysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const pad = x => `00${x}`.slice ( -2 );

        const date = new Date ();
        const hours = pad ( date.getHours () );
        const minutes = pad ( date.getMinutes () );
        const seconds = pad ( date.getSeconds () );
        const wday = daysNames[date.getDay ()];
        const day = date.getDate ();
        const month = monthsNames[date.getMonth ()];
        const year = date.getFullYear ();

        const infoStatus = `${battery}% - ${wday} ${day} ${month} ${year} - ${hours}:${minutes}:${seconds}`;
        const infoMusic = songName ? `\n•\n${songDisliked ? '♡' : '♥'} - ${_.truncate ( songName.trim (), { length: 40 } )}` : '';
        const info = `${infoStatus}${infoMusic}`;

        alert ( info );

      });

    });

  });

});
