class SpaceManager {
    /* GET SPACE INDEX */

    getSpaceIndex(space = Space.active()) {

        return Space.all().findIndex(s => s.isEqual(space));

    }

    getSpaceName(space, index) {

        if (space) {

            const vscode = space.windows().find(window => /Code/.test(window.app().name()));

            if (vscode) {

                const title = vscode.title();

                return _.trim(_.last(title.split(' — ')).replace('(Workspace)', '').replace('[Unsupported]', ''));

            }

        }

        if (_.isNumber(index)) {

            return index ? `Space ${index + 1}` : 'Home';

        }

        return 'Unnamed Space';

    }

    index2keycode(index) {

        const keycodes = [18, 19, 20, 21, 23, 22, 26, 28, 25], // Corresponding to numbers from 1 to 9
            keycode = keycodes[index];

        return keycode ? `${keycode}` : ''; // Alfred wants a string, not a number

    }


    switchSpace(modifier, wrap = SPACES_SWITCH_WRAP) {

        const spaces = Space.all();

        if (spaces.length < 2) return; // Nothing to switch to

        const activeSpace = Space.active(),
            activeIndex = getSpaceIndex(activeSpace);

        let nextIndex = activeIndex + modifier;

        if (nextIndex < 0 || nextIndex >= spaces.length) {

            if (!wrap) return;

            nextIndex = (nextIndex < 0) ? spaces.length + nextIndex : nextIndex % spaces.length;

        }

        const script = `tell application "System Events" to key code {${index2keycode(nextIndex)}} using {control down, option down, command down, shift down}`;

        setTimeout(() => osascript(script), 250); //FIXME: https://github.com/kasper/phoenix/issues/206

    }



}