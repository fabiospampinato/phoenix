function findApp(appName, bundleIdentifier = "") {
  let app = false;

  if (bundleIdentifier !== "") {
    App.all().filter((a) => {
      if (a.bundleIdentifier() === bundleIdentifier) {
        app = a;
        return app;
      }
    });
    return app
  }

  app = App.get(appName)
  return app;
}

function switchToApp(appName, launch = true, bundleIdentifier = "") {
  const app = findApp(appName, bundleIdentifier);

  if (!app && launch) {
    return Boolean(App.launch(appName, { focus: true }))
  }

  if (app.isHidden()) {
    app.show();
  }

  return app.focus();
}


const switchers = [
  ['T', HYPER, ['Trello']],
  ['D', HYPER, ['Dash']],
  ['M', HYPER, ['WhatsApp']],
  ['M', HYPER_SHIFT, ['Telegram']],
  ['C', HYPER, ['Google Chrome', true, 'com.google.Chrome']],
  ['C', HYPER_SHIFT, ['Google Chrome Canary', true, 'com.google.Chrome.canary']],
  ['.', HYPER, ['iTerm']],
  ['P', HYPER, ['PhpStorm']],
  ['P', HYPER_SHIFT, ['GoLand']],
  ['V', HYPER, ['Visual Studio Code']],
  ['R', HYPER, ['Microsoft Remote Desktop']],
];


setHandlers(switchToApp, switchers);