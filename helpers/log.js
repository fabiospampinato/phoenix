
/* LOG */

function log ( ...args ) {

  args.forEach ( arg => {

    const str = arg ? JSON.stringify ( arg, undefined, JSON_INDENTATION ) || arg.toString () : arg;

    Phoenix.log ( str );

  });

}

console.log = log;
