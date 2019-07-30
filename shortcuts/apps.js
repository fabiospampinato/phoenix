function findApp(appName) {
  const app = App.get(appName);
  if (!app) {
    return false;
  }
  return app;
}

function switchToApp(appName, launch = true) {
  const app = findApp(appName);

  if (!app && launch) {
    return Boolean(App.launch(appName, {focus: true}))
  }

  if (app.isHidden()) {
    app.show();
  }
  
  return app.focus();
}


const switchers = [
  ['`', HYPER, ['Asana']],
  ['d', HYPER, ['Dash 2']],
  ['m', HYPER, ['WhatsApp']],
  ['c', HYPER, ['Google Chrome']],
  ['t', HYPER, ['iTerm']],
];


setHandlers(switchToApp, switchers);