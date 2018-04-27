
/* CENTER WINDOW */

function center_window ( window ) {

  const screen = window.screen (),
        sFrame = screen.frame (),
        wFrame = window.frame ();

  window.setFrame ({
    x: sFrame.x + ( sFrame.width / 2 ) - ( wFrame.width / 2 ),
    y: Math.max ( 0, sFrame.y ) + ( sFrame.height / 2 ) - ( wFrame.height / 2 ),
    width: wFrame.width,
    height: wFrame.height
  });

}
