
/* SET ANCHOR BY NAME */

function setAnchorByName ( name, window = Window.focused () ) {

  return setAnchor ( ...getNamedAnchor ( name ), window );

}
