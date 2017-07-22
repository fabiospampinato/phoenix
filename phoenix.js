
/* IMPORT */

require ( './config.js' );
require ( './constants.js' );

require ( './helpers/alert.js' );
require ( './helpers/find_window.js' );
require ( './helpers/focus_window.js' );
require ( './helpers/grow_frame.js' );
require ( './helpers/log.js' );
require ( './helpers/osascript.js' );
require ( './helpers/set_frame.js' );
require ( './helpers/set_handler.js' );
require ( './helpers/set_handlers.js' );

require ( './keybindings/corners.js' );
require ( './keybindings/expand.js' );
require ( './keybindings/focus.js' );
require ( './keybindings/fullscreen.js' );
require ( './keybindings/info.js' );
require ( './keybindings/growth.js' );
require ( './keybindings/orthogonal.js' );
require ( './keybindings/quit.js' );
require ( './keybindings/reload.js' );
require ( './keybindings/split_view.js' );
require ( './keybindings/thirds.js' );
require ( './keybindings/workspace.js' );

require ( './magic/developer_tools.js' );
require ( './magic/finder.js' );
require ( './magic/terminal.js' );
require ( './magic/space.js' );

/* LOADED */

alert ( '', App.get ( 'Phoenix' ).icon () );
