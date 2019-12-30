
/* HALVES */

const halves = [
  ['[', HYPER, ['half-1']],
  [']', HYPER, ['half-2']]
];

(new EventDispatcher()).setHandlers(new WindowManager().setFrame, halves);
