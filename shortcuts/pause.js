
/* PAUSE */

setKeyHandler ( 'f8', HYPER, () => {

  osascript ( 'tell application "System Events" to return name of first process whose frontmost is true', ({ output }) => {

    const app = _.trim ( output ),
          isStopped = !Window.focused (); // If the app is stopped this will return undefined

    shell ( `killall -${isStopped ? 'CONT' : 'STOP'} -c '${app}'` );

    modalWindow ({ text: isStopped ? 'Resumed' : 'Paused' });

  });

});
