
/* SET FRAME BY NAME */

function setFrameByName ( name, window = Window.focused () ) {

  setFrame ( ...getFrameByName ( name ), window );
  setAnchorByName ( name, window );

}
