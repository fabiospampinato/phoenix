class WindowManager {


    /** @param {Window} window */
    centerWindow(window) {
        const screen = window.screen(), sFrame = screen.frame(), wFrame = window.frame();
        window.setFrame({
            x: sFrame.x + (sFrame.width / 2) - (wFrame.width / 2),
            y: Math.max(0, sFrame.y) + (sFrame.height / 2) - (wFrame.height / 2),
            width: wFrame.width,
            height: wFrame.height
        });
    }
    /**
     * Finds window
     *
     * @param {[]Windows } windows
     * @param {boolean|string} name
     * @param {boolean|string} isNameOptional
     * @param {boolean|string} title
     *
     * @returns {Window}
     */
    findWindow(windows = Window.all(), name = false, isNameOptional = false, title = false) {
        let fallback;
        for (let i = 0, l = windows.length; i < l; i++) {
            const window = windows[i], windowTitle = window.title();
            if (!windowTitle)
                continue; // Not a normal window
            const titleOK = !title || (title.test(windowTitle));
            if (!titleOK)
                continue;
            const nameOK = !name || (window.app().name() === name);
            if (nameOK)
                return window;
            if (isNameOptional)
                fallback = window;
        }
        return fallback;
    }

    focusWindow(name = false, isNameOptional = false, title = false, launch = true, callback = _.noop) {
        const space = Space.active(), window = findWindow(space.windows(), name, isNameOptional, title);
        if (window) {
            window.unminimise();
            window.focus();
            callback(false);
        }
        else if (launch) {
            if (_.isFunction(launch)) {
                launch();
                callback(true);
            }
            else if (_.isString(launch)) {
                osascript(launch);
                callback(true);
            }
            else if (name) {
                const app = App.launch(name, { focus: true });
                if (!app)
                    return;
                /* CHECKING */
                let checksNr = 0, maxChecksNr = FOCUS_WINDOW_CHECK_CYCLES;
                const intervalId = setInterval(() => {
                    const newWindow = findWindow(space.windows(), name, isNameOptional, title);
                    if (newWindow) {
                        clearInterval(intervalId);
                        callback(true);
                    }
                    else if (checksNr >= maxChecksNr) {
                        alert(`Can't open new "${name}" window, provide some custom logic`);
                        clearInterval(intervalId);
                        callback(true);
                    }
                    checksNr++;
                }, FOCUS_WINDOW_CHECK_INTERVAL);
            }
        }
    }

    growFrame(x, y, width, height, window = Window.focused()) {
        if (!window)
            return;
        const screen = Screen.main(), sFrame = screen.flippedFrame(), svFrame = screen.flippedVisibleFrame(), yUnusable = sFrame.height - svFrame.height, frame = window.frame(), newFrame = _.cloneDeep(frame);
        //FIXME: We are leveraging the fact that in the current use case `x` and `y` are always negatives, while `width` and `height` are always positives
        if (x)
            newFrame.x = _.clamp(frame.x + x, sFrame.x, sFrame.x + sFrame.width);
        if (y)
            newFrame.y = _.clamp(frame.y + y, yUnusable, yUnusable + svFrame.height);
        if (width)
            newFrame.width = Math.min(x ? frame.x + frame.width : sFrame.width - frame.x, frame.width + (width - (Math.abs(x) - Math.abs(frame.x - newFrame.x))));
        if (height)
            newFrame.height = Math.min(y ? frame.y + frame.height : sFrame.height - frame.y, frame.height + (height - (Math.abs(y) - Math.abs(frame.y - newFrame.y))));
        window.setFrame(newFrame);
    }

    setFrame(x, y, width, height, window = Window.focused()) {
        if (_.isString(x))
            return setFrame(...getNamedFrame(x), y || window);
        if (!window)
            return;
        const screen = window.screen(), frame = screen.flippedVisibleFrame();
        window.setFrame({
            x: frame.x + (frame.width * x),
            y: frame.y + (frame.height * y),
            width: frame.width * width,
            height: frame.height * height
        });
    }

    getNamedFrame(name) {
        const dTop = (TOP_HEIGHT_PERCENTAGE - 50) / 100, dLeft = (LEFT_WIDTH_PERCENTAGE - 50) / 100;
        switch (name) {
            /* SIDES */
            case 'top': return [0, 0, 1, 0.5 + dTop];
            case 'right': return [0.5 + dLeft, 0, 0.5 - dLeft, 1];
            case 'bottom': return [0, 0.5 + dTop, 1, 0.5 - dTop];
            case 'left': return [0, 0, 0.5 + dLeft, 1];
            /* CORNERS */
            case 'top-left': return [0, 0, 0.5 + dLeft, 0.5 + dTop];
            case 'top-right': return [0.5 + dLeft, 0, 0.5 - dLeft, 0.5 + dTop];
            case 'bottom-right': return [0.5 + dLeft, 0.5 + dTop, 0.5 - dLeft, 0.5 - dTop];
            case 'bottom-left': return [0, 0.5 + dTop, 0.5 + dLeft, 0.5 - dTop];
            /* HALVES */
            case 'half-1': return [0, 0, 1 / 2, 1];
            case 'half-2': return [1 / 2, 0, 1 / 2, 1];
            /* THIRDS */
            case 'third-1': return [0, 0, 1 / 3, 1];
            case 'third-2': return [1 / 3, 0, 1 / 3, 1];
            case 'third-3': return [2 / 3, 0, 1 / 3, 1];
            /* SIXTHS */
            case 'sixths-1': return [0, 0, 1 / 3, 1 / 2];
            case 'sixths-2': return [1 / 3, 0, 1 / 3, 1 / 2];
            case 'sixths-3': return [2 / 3, 0, 1 / 3, 1 / 2];
            case 'sixths-4': return [0, 1 / 2, 1 / 3, 1 / 2];
            case 'sixths-5': return [1 / 3, 1 / 2, 1 / 3, 1 / 2];
            case 'sixths-6': return [2 / 3, 1 / 2, 1 / 3, 1 / 2];
            /* EXTEND */
            case 'extend': return [0, 0, 1, 1];
            /* DEFAULT */
            default: throw new Error(`Undefined frame named: "${name}"`);
        }
    }
}
