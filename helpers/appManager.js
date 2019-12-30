class AppManager {
    /**
     * Search application with exact matching `appName` with fallback to searching
     * by `bundleIdentifier` is it was passed
     *
     * @param {string} appName application name
     * @param {string} bundleIdentifier application bundle identifier
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
        const app = findApp(appName, bundleIdentifier);

        if (!app && launch) {
            return Boolean(App.launch(appName, { focus: true }));
        }

        if (app.isHidden()) {
            app.show();
        }

        return app.focus();
    }

}