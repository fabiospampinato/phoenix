
/* HALVES */

const halves = [
  ['[', HYPER, ['half-1']],
  [']', HYPER, ['half-2']]
];

let wmHalves = new WindowManager();

(new EventDispatcher()).setHandlers(wmHalves.setFrame.bind(wmHalves), halves);
