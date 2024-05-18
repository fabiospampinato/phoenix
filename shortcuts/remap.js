
//TODO: Document this

/* REMAP - § - NONE */

setKeyHandler ( '§', [], () => {
  osascript ( 'tell application "System Events" to keystroke "`"' );
});

/* REMAP - § - SINGLE */

setKeyHandler ( '§', ['ctrl'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {control down}' );
});

setKeyHandler ( '§', ['alt'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {option down}' );
});

setKeyHandler ( '§', ['shift'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {shift down}' );
});

/* REMAP - § - DOUBLE */

setKeyHandler ( '§', ['ctrl', 'alt'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {control down, option down}' );
});

setKeyHandler ( '§', ['ctrl', 'shift'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {control down, shift down}' );
});

setKeyHandler ( '§', ['alt', 'shift'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {option down, shift down}' );
});

/* REMAP - § - TRIPLE */

setKeyHandler ( '§', ['ctrl', 'alt', 'shift'], () => {
  osascript ( 'tell application "System Events" to keystroke "`" using {control down, option down, shift down}' );
});
