
/* SET FRAME BY NAME */

function setFrameByName ( name, window = Window.focused () ) {

  setFrame ( ...getNamedFrame ( name ), window );
  setAnchorByName ( name, window );

}
