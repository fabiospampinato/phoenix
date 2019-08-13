function findApp(appNames) {
  debugger;

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
  debugger;

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
  ['D', HYPER, [['Dash 2']]],
  ['M', HYPER, [['WhatsApp', 'Telegram'], false]],
  ['C', HYPER, [['Google Chrome']]],
  ['T', HYPER, [['iTerm']]],
  ['P', HYPER, [['PhpStorm', 'GoLand'], false]],
  ['V', HYPER, [['Code']]],
];


setHandlers(switchToApp, switchers);