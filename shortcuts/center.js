
/* CENTER */

(new EventDispatcher()).setHandler('x', HYPER, () => {

  const window = Window.focused();

  if (!window) return;

  (new WindowManager()).centerWindow(window);

});

(new EventDispatcher()).setHandler('x', HYPER_SHIFT, () => {

  const window = Window.focused();

  if (!window) return;

  const frame = window.frame();

  window.setFrame({
    x: frame.x,
    y: frame.y,
    width: CENTER_WIDTH,
    height: CENTER_HEIGHT
  });

  (new WindowManager()).centerWindow(window);

});
