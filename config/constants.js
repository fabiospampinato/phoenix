
const VERSION = 'phoenix-config v0.0.1';


const DEBUG_MODE_KEY = 'PHOENIX_DEBUG_CONFIG';


/* PHOENIX */

const HANDLERS = [];

/* KEYS */

const HYPER = ['ctrl', 'alt', 'cmd'];
const HYPER_SHIFT = [...HYPER, 'shift'];
const DOUBLE_KEY_INTERVAL = 250;

/* OTHERS */

const SHELL_PATH = '/bin/bash';
const OSASCRIPT_PATH = '/usr/bin/osascript';

const ALERT_APPEARANCE = 'dark';
const ALERT_DURATION = 1;
const ALERT_ANIMATION_DURATION = 0.2;
const ALERT_WEIGHT = 24;

const CENTER_WIDTH = 900;
const CENTER_HEIGHT = 600;

const DEVTOOLS_SHRINK_HEIGHT = 75;

const FOCUS_WINDOW_CHECK_CYCLES = 10;
const FOCUS_WINDOW_CHECK_INTERVAL = 250;

const GROW_AMOUNT = 50;

const JSON_INDENTATION = 2;

const LEFT_WIDTH_PERCENTAGE = 40; // Set it to 50 if you want symmetric left and right sides' widths
const TOP_HEIGHT_PERCENTAGE = 50; // Set it to 50 if you want symmetric top and bottom sides' heights

const QUIT_BLACKLIST = ['Finder'];

const SPACES_SWITCH_WRAP = true;
const SPACES_OVERLAY_DURATION = ALERT_DURATION / 2;
const SPACES_LIST_RAW_PATH = '~/.config/phoenix/spaces/list_raw.json';
const SPACES_LIST_PATH = '~/.config/phoenix/spaces/list.json';
const SPACES_ALFRED_PRESELECT = true;
const SPACES_ALFRED_PRESELECT_DELAY = 0.1;
const SPACES_UPDATE_CYCLES = 5;
const SPACES_UPDATE_INTERVAL = 500;
