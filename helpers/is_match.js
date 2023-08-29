
/* IS MATCH */

function isMatch ( target, search, fuzzy = false ) {

  if ( fuzzy ) {

    const targetLength = target.length;
    const searchLength = search.length;

    if ( searchLength > targetLength ) return false;

    target = target.toLowerCase ();
    search = search.toLowerCase ();

    if ( searchLength === targetLength ) return search === target;

    outer:
    for ( let i = 0, j = 0; i < searchLength; i++ ) {

      const searchChar = search.charCodeAt ( i );

      while ( j < targetLength ) {

        if ( target.charCodeAt ( j++ ) === searchChar ) continue outer;

      }

      return false;

    }

    return true;

  } else {

    return target.toLowerCase ().includes ( search.toLowerCase () );

  }

}
