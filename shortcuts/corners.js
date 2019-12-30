
/* CORNERS */

const corners = [
  ['q', HYPER, ['top-left']],
  ['w', HYPER, ['top-right']],
  ['s', HYPER, ['bottom-right']],
  ['a', HYPER, ['bottom-left']]
];

(new EventDispatcher()).setHandlers(new WindowManager().setFrame, corners);
