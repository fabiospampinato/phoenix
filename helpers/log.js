
/* LOG */

class Logger {

  /**
   * Logs data either to stdout or developer tools console depending on
   * is in the Storage value with `PHOENIX_DEBUG_KEY` set to `true`;
   * @param  {...any} data  Data to be logged
   */
  static log(...data) {

    if (Storage.get(DEBUG_MODE_KEY) === true) {
      console.log(data);
      return;
    }


    data.forEach(arg => {

      // TOOD: importance of convertins to JSON?
      const str = arg ? JSON.stringify(arg, undefined, JSON_INDENTATION) || arg.toString() : arg;

      Phoenix.log(str);

    });

  }
}

