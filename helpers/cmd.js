class Cmd {

    shell(command, callback = _.noop) {

        Task.run(SHELL_PATH, ['-c', command], callback);

    }

    readFile(path, callback = _.noop) {

        shell(`cat ${path}`, ({ output }) => callback(output));

    }

    readJSON(path, fallback = {}, callback = _.noop) {

        readFile(path, content => {

            const parsed = _.attempt(JSON.parse, content),
                obj = _.isError(parsed) ? fallback : parsed;

            callback(obj);

        });

    }

    osascript(script, callback = _.noop) {

        Task.run(OSASCRIPT_PATH, ['-e', script], callback);

    }
    writeFile(path, content, callback = _.noop) {

        shell(`echo '${content}' > ${path}`, callback);

    }
    writeJSON(path, obj, callback = _.noop) {

        const str = JSON.stringify(obj, undefined, JSON_INDENTATION) || '{}',
            content = str.replace("'", "\\'");

        writeFile(path, content, callback);

    }


}