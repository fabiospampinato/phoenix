
/* THIRDS */

const thirds = [
  [1, HYPER, ['third-1']],
  [2, HYPER, ['third-2']],
  [3, HYPER, ['third-3']]
];

let wm = new WindowManager();

(new EventDispatcher()).setHandlers(wm.setFrame.bind(wm), thirds);
