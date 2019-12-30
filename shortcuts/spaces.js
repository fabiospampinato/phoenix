
/* SPACES */

(new EventDispatcher()).setHandler('tab', HYPER, () => new SpaceManager().switchSpace(1));

(new EventDispatcher()).setHandler('tab', HYPER_SHIFT, () => new SpaceManager() / switchSpace(-1));
