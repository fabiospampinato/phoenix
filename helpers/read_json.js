
/* READ JSON */

function readJSON ( path, fallback = {}, callback = _.noop ) {

  readFile ( path, content => {

    const parsed = _.attempt ( JSON.parse, content ),
          obj = _.isError ( parsed ) ? fallback : parsed;

    callback ( obj );

  });

}
