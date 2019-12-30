
/* GROW */

const grow = [
  ['up', HYPER_SHIFT, [0, - GROW_AMOUNT, 0, GROW_AMOUNT]],
  ['right', HYPER_SHIFT, [0, 0, GROW_AMOUNT, 0]],
  ['down', HYPER_SHIFT, [0, 0, 0, GROW_AMOUNT]],
  ['left', HYPER_SHIFT, [- GROW_AMOUNT, 0, GROW_AMOUNT, 0]]
];

(new EventDispatcher()).setHandlers(new WindowManager().growFrame, grow, false);
