
/* SIXTHS */

const sixths = [
  ['q', HYPER_SHIFT, ['sixths-1']],
  ['w', HYPER_SHIFT, ['sixths-2']],
  ['e', HYPER_SHIFT, ['sixths-3']],
  ['a', HYPER_SHIFT, ['sixths-4']],
  ['s', HYPER_SHIFT, ['sixths-5']],
  ['d', HYPER_SHIFT, ['sixths-6']]
];

let wmSixths = new WindowManager();

(new EventDispatcher()).setHandlers(wmSixths.setFrame.bind(wmSixths), sixths);
