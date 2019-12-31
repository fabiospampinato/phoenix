

const switchers = [
  ['`', HYPER, ['Trello']],
  ['D', HYPER, ['Dash']],
  ['M', HYPER, ['WhatsApp']],
  ['M', HYPER_SHIFT, ['Telegram']],
  ['C', HYPER, ['Google Chrome', true, 'com.google.Chrome']],
  ['C', HYPER_SHIFT, ['Google Chrome Canary', true, 'com.google.Chrome.canary']],
  ['T', HYPER, ['iTerm']],
  ['P', HYPER, ['PhpStorm']],
  ['F', HYPER, ['Finder']],
  ['P', HYPER_SHIFT, ['GoLand']],
  ['V', HYPER, ['Code']],
  ['R', HYPER, ['Microsoft Remote Desktop']],
];
const handler = (appName, launch, bid) => {
  return (new AppManager()).switchToApp(appName, launch, bid);
};

(new EventDispatcher()).setHandlers(handler, switchers);
