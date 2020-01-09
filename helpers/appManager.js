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

        if (!app && launch) {
            app = App.launch(appName, { focus: true });
        }

        if (typeof app === 'undefined') {
            (new Alert()).show(`Can not launch the '${appName}' application.`, App.get('Phoenix').icon())
            return;
        }

        if (app.isHidden()) {
            app.show();
        }



        Logger.log('switchToApp', 'app', app.name(), {
            isActive: app.isActive(),
            isHidden: app.isHidden(),
        });


        // if (app.bundleIdentifier() == 'com.apple.finder') {
        //     let window;


        //     if (app.windows().length > 1) {
        //         window = app.windows()[0];
        //         Logger.log('switchToApp', 'app', app.name(), 'window', {
        //             isVisible: window.isVisible(),
        //             isMain: window.isMain(),
        //             isNormal: window.isNormal()
        //         });
        //     }



        //     let cmd = new Cmd();
        //     if (window && window.title() !== '') {
        //         app.focus();
        //         window.raise();
        //     } else {
        //         cmd.osascript(`
        //             tell application "Finder"
        //                 make new Finder window to (path to home folder)
        //                 activate
        //             end tell
        //         `);
        //     }
        // }

        return app.focus();


    }

}