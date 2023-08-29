
/* GET APPS */

//TODO: Extract icons also, which Spotlight would then use

let getApps = () => {

  const apps = [];

  shell ( 'find /Applications /System/Applications ~/Applications -maxdepth 2 -name "*.app" -print', ({ output }) => {

    const paths = output.trim ().split ( '\n' ).sort ();

    for ( const path of paths ) {

      const name = path.split ( '/' ).pop ().replace ( /\.app$/, '' );
      const app = { name, path };

      apps.push ( app );

    }
  });

  getApps = () => {

    return apps;

  };

  return apps;

};

/* INIT */

setTimeout ( getApps, 1 );
