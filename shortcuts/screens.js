
/* SCREENS */

setKeyHandler ( 'return', HYPER, () => {

  shell ( 'resolution-set' );

});

setTimeout ( () => shell ( 'resolution-set' ), 1000 );
