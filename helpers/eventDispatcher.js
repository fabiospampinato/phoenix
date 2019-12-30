class EventDispatcher {


    setEventHandler(event, handler) {

        Logger.log(event, 'handlerName', handler.name);

        HANDLERS.push(Event.on(event, handler));

    }


    setEventsHandler(events, handler) {

        events.forEach(event => this.setEventHandler(event, handler));

    }


    setHandler(key, modifier, handler, handlerArgs = [], skipRepetitions = true) {

        Logger.log(`${key} ${modifier}`, 'handlerName', handler.name);

        HANDLERS.push(Key.on(key, modifier, (identifier, repeated) => {

            if (repeated && skipRepetitions) return;

            handler(...handlerArgs);

        }));

    }

    setHandlers(handler, data, skipRepetitions = true) {

        data.forEach(data => {

            const [key, modifier, handlerArgs] = data;

            this.setHandler(key, modifier, handler, handlerArgs || [], skipRepetitions);

        });

    }



}