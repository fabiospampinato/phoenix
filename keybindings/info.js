
/* INFO */

setHandler ( 'i', HYPER, () => {

  const windows = Space.active ().windows ();

  windows.forEach ( window => {

    if ( !window.isVisible () || !window.title () ) return;

    const sFrame = Screen.main ().flippedVisibleFrame (),
          wFrame = window.frame (),
          app = window.app ();

    Modal.build ({
      origin ( mFrame ) {
        return {
          x: wFrame.x + ( wFrame.width / 2 ) - ( mFrame.width / 2 ),
          y: sFrame.height - ( wFrame.y + ( wFrame.height / 2 ) )
        };
      },
      weight: 24,
      duration: 1,
      appearance: 'dark',
      icon: app.icon ()
    }).show ();

  });

});
