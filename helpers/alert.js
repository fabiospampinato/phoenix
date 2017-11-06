
/* ALERT */

function alert ( text, icon, duration = ALERT_DURATION ) {

  const frame = Screen.main ().flippedVisibleFrame ();

  Modal.build ({
    origin ( mFrame ) {
      return {
        x: ( frame.width / 2 ) - ( mFrame.width / 2 ),
        y: ( frame.height / 2 ) - ( mFrame.height / 2 )
      };
    },
    weight: ALERT_WEIGHT,
    duration,
    appearance: ALERT_APPEARANCE,
    text,
    icon
  }).show ();

}
