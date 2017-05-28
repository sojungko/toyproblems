const mixEvents = (obj) => {
  let events = {};
  return Object.assign(obj, {
    on: function (event, cb) {
      events[event] = !events[event] ? [cb] : [...events[event], cb];
    },

    trigger: function (event, ...args) {
      if (!events[event]) {
        return
      }
      events[event].forEach((cb) => cb.apply(this, [...args]))
    }
  });
}