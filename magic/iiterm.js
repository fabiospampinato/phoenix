
/* HYPER */

setEventHandler('windowDidOpen', magicITermOpen); //FIXME: Doesn't seem to be working

/* HANDLER */

function magicITermOpen(window) {

  if (!window.isNormal() || !window.isMain()) return;

  const name = window.app().name(),
    title = window.title();

  if (!/iTerm/.test(name) || false) return;

  setFrame('extend', window);

}