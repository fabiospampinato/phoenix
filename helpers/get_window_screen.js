
/* GET WINDOW SCREEN */

function getWindowScreen ( win = Window.focused () ) {

  if ( win ) return win.screen () || Screen.main ();

  return Screen.main ();

}
