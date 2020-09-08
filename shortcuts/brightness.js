
/* BRIGHTNESS */

setKeyHandler ( 'f1', HYPER, () => {

  shell ( 'brightness-mod -0.1' );

});

setKeyHandler ( 'f2', HYPER, () => {

  shell ( 'brightness-mod 0.1' );

});

/* BRIGHTNESS - QUARTERS */

setKeyHandler ( 'f1', HYPER_SHIFT, () => {

  shell ( 'brightness-mod -0.025' );

});

setKeyHandler ( 'f2', HYPER_SHIFT, () => {

  shell ( 'brightness-mod 0.025' );

});
