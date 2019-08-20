
/* MODAL */

function modal ( options ) {

  Modal.build ({
    origin: options.origin,
    weight: MODAL_WEIGHT,
    duration: MODAL_DURATION,
    animationDuration: MODAL_ANIMATION_DURATION,
    appearance: MODAL_APPEARANCE,
    text: _.isString ( options.text ) ? options.text : '',
    icon: _.isObject ( options.icon ) ? options.icon : undefined
  }).show ();

}
