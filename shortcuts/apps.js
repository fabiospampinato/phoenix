function findApp(appNames) {
  let app = false;

  appNames.forEach((appName) => {
    app = App.get(appName);
    if (app) {
      return app;
    }
  });

  return app;
}

function switchToApp(appNames, launch = true) {
  const app = findApp(appNames);

  if (!app && launch) {
    return Boolean(App.launch(appNames, {focus: true}))
  }

  if (app.isHidden()) {
    app.show();
  }
  
  return app.focus();
}


const switchers = [
  ['`', HYPER, [['Asana']]],
  ['D', HYPER, [['Dash']]],
  ['M', HYPER, [['WhatsApp']]],
  ['M', HYPER_SHIFT, [['Telegram']]],
  ['C', HYPER, [['Google Chrome']]],
  ['T', HYPER, [['iTerm']]],
  ['P', HYPER, [['PhpStorm']]],
  ['P', HYPER_SHIFT, [['GoLand']]],
  ['V', HYPER, [['Code']]],
];


setHandlers(switchToApp, switchers);