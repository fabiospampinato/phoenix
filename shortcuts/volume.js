
/* VOLUME */

setKeyHandler ( 'f11', HYPER, () => {

  shell ( 'volume-mod -0.1' );

});

setKeyHandler ( 'f12', HYPER, () => {

  shell ( 'volume-mod 0.1' );

});

/* VOLUME - QUARERS */

setKeyHandler ( 'f11', HYPER_SHIFT, () => {

  shell ( 'volume-mod -0.025' );

});

setKeyHandler ( 'f12', HYPER_SHIFT, () => {

  shell ( 'volume-mod 0.025' );

});
