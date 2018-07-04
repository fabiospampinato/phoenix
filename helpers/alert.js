
/* ALERT */

function alert ( text, icon, duration = ALERT_DURATION ) {

  const frame = Screen.main ().flippedFrame ();

  Modal.build ({
    origin ( mFrame ) {
      return {
        x: frame.x + ( frame.width / 2 ) - ( mFrame.width / 2 ),
        y: ( frame.height / 2 ) - ( mFrame.height / 2 )
      };
    },
    weight: ALERT_WEIGHT,
    duration,
    animationDuration: ALERT_ANIMATION_DURATION,
    appearance: ALERT_APPEARANCE,
    text,
    icon
  }).show ();

}
