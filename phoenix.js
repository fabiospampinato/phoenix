

/* IMPORT */

require('./config/phoenix.js');
require('./config/constants.js');

require('./helpers/logger.js');
require('./helpers/alert.js');
require('./helpers/windowManager.js');
require('./helpers/eventDispatcher.js');
require('./helpers/spaceManager.js');
require('./helpers/appManager.js');
require('./helpers/cmd.js');

require('./shortcuts/center.js');
require('./shortcuts/corners.js');
require('./shortcuts/expand.js');
// require ( './shortcuts/focus.js' );
require('./shortcuts/fullscreen.js');
require('./shortcuts/info.js');
require('./shortcuts/grow.js');
require('./shortcuts/halves.js');
require('./shortcuts/pause.js');
require('./shortcuts/quit.js');
require('./shortcuts/reload.js');
require('./shortcuts/sides.js');
require('./shortcuts/spaces.js');
require('./shortcuts/sixths.js');
require('./shortcuts/split_view.js');
require('./shortcuts/thirds.js');
require('./shortcuts/apps.js');

require('./magic/chrome.js');
require('./magic/finder.js');
require('./magic/terminal.js');
require('./magic/vscode.js');

/* LOADED */

/** @global App */
(new Alert()).show('', App.get('Phoenix').icon());

