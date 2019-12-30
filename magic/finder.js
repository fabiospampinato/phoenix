
/* FINDER */

setEventHandler('windowDidOpen', magicFinderOpen);

/* HELPERS */
/** @param {Window} window  */
function magicFinderOpen(window) {


  Logger.log(window.app().name(), window);

  if (!window.isNormal() || !window.isMain()) return;

  const name = window.app().name(),
    title = window.title();

  if (!/Finder/.test(name)) return;

  if (!title || /(Quick Look)|(About Finder)|(Finder Preferences)|(Info$)/.test(title)) return;

  // setFrame('extend', window);
  window.maximize();

}
