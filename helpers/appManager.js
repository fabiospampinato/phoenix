class AppManager {
    /**
     * Search application with exact matching `appName` with fallback to searching
     * by `bundleIdentifier` is it was passed
     *
     * @param {string} appName application name
     * @param {string} bundleIdentifier application bundle identifier
     * 
     * @returns {App}
     */
    findApp(appName, bundleIdentifier = "") {
        let app = false;

        debugger;

        if (bundleIdentifier !== "") {
            App.all().filter(a => {
                if (a.bundleIdentifier() === bundleIdentifier) {
                    app = a;
                    return app;
                }
            });
            return app;
        }

        app = App.get(appName);
        return app;
    }

    switchToApp(appName, launch = true, bundleIdentifier = "") {

        let app = this.findApp(appName, bundleIdentifier);

        debugger;


        let started;
        if (!app && launch) {
            started = App.launch(appName);
        }

        Logger.log('switchToApp', 'app', {
            isActive: started.isActive(),
            isHidden: started.isHidden(),
        });

        Logger.log('switchToApp', 'window', {
            isMain: started.mainWindow().isMain(),
            isNormal: started.mainWindow().isNormal(),
            isFullScreen: started.mainWindow().isFullScreen(),
            isMinimised: started.mainWindow().isMinimised(),
            isVisible: started.mainWindow().isVisible(),
        });

        let window = started.mainWindow() || started.windows()[0];
        let cmd = new Cmd();
        return window && window.isMain() ? started.focus() : cmd.osascript(`
        tell application "${started.name}"
            make new Finder window to (path to downloads folder)
            activate
        end tell
        `);


        if (!started.isHidden() || started.isMinimised()) {
            started.unmininmize();
            started.show();
        }

        return true;


    }

}