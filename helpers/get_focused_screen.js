
/* GET FOCUSED SCREEN */

function getFocusedScreen ( win = Window.focused () ) {

  if ( win ) return win.screen ();

  return Screen.main ();

}
