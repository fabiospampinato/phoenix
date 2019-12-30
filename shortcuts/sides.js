
/* SIDES */

const sides = [
  ['up', HYPER, ['top']],
  ['right', HYPER, ['right']],
  ['down', HYPER, ['bottom']],
  ['left', HYPER, ['left']]
];

(new EventDispatcher()).setHandlers(new WindowManager().setFrame, sides);
