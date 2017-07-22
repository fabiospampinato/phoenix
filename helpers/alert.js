
/* ALERT */

function alert ( text, icon, duration = 1 ) {

  const frame = Screen.main ().flippedVisibleFrame ();

  Modal.build ({
    origin ( mFrame ) {
      return {
        x: ( frame.width / 2 ) - ( mFrame.width / 2 ),
        y: ( frame.height / 2 ) - ( mFrame.height / 2 )
      };
    },
    weight: 24,
    duration,
    appearance: 'dark',
    text,
    icon
  }).show ();

}
