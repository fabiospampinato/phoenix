
/* CENTER WINDOW */

function centerWindow ( window ) {

  const screen = getWindowScreen ( window );
  const sFrame = screen.flippedFrame ();
  const wFrame = window.frame ();

  window.setFrame ({
    x: sFrame.x + ( sFrame.width / 2 ) - ( wFrame.width / 2 ),
    y: sFrame.y + ( sFrame.height / 2 ) - ( wFrame.height / 2 ),
    width: wFrame.width,
    height: wFrame.height
  });

}
