
/* SIDES */

const sides = [
  ['up', HYPER, ['top']],
  ['right', HYPER, ['right']],
  ['down', HYPER, ['bottom']],
  ['left', HYPER, ['left']]
];

let wmSides = new WindowManager();

(new EventDispatcher()).setHandlers(wmSides.setFrame.bind(wmSides), sides);
