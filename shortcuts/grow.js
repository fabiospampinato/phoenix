
/* GROW */

const grow = [
  ['up', HYPER_SHIFT, [0, -50, 0, 50]],
  ['right', HYPER_SHIFT, [0, 0, 50, 0]],
  ['down', HYPER_SHIFT, [0, 0, 0, 50]],
  ['left', HYPER_SHIFT, [-50, 0, 50, 0]]
];

setHandlers ( growFrame, grow, false );
