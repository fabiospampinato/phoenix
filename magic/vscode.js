
/* VSCODE */
setEventHandler('windowDidOpen', magicVSCodeOpen);

/* HELPERS */
/** @param {Window} window */
function magicVSCodeOpen(window) {

  Logger.log(window.app().name(), {
    isNormal: window.isNormal(), isMain: window.isMain()
  }, window);

  if (!window.isNormal() || !window.isMain()) return;

  if (!/Code/.test(window.app().name())) return;

  Logger.log('magic-vscode:extending', window);

  setFrame('extend', window);

}
