

const switchers = [
  ['`', HYPER, ['Trello']],
  ['D', HYPER, ['Dash']],
  ['M', HYPER, ['WhatsApp']],
  ['M', HYPER_SHIFT, ['Telegram']],
  ['C', HYPER, ['Google Chrome', true, 'com.google.Chrome']],
  ['C', HYPER_SHIFT, ['Google Chrome Canary', true, 'com.google.Chrome.canary']],
  ['T', HYPER, ['iTerm']],
  ['P', HYPER, ['PhpStorm']],
  ['P', HYPER_SHIFT, ['GoLand']],
  ['V', HYPER, ['Code']],
  ['R', HYPER, ['Microsoft Remote Desktop']],
];

(new EventDispatcher()).setHandlers(new AppManager().switchToApp, switchers);
