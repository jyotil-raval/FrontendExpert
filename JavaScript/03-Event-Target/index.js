class EventTarget {
  constructor() {
    this.listeners = {};
  }

  addEventListener(name, callback) {
    if (!this.listeners.hasOwnProperty(name)) {
      this.listeners[name] = [callback];
    } else if (this.listeners[name].includes(callback)) {
      return;
    } else {
      this.listeners[name].push(callback);
    }
  }

  removeEventListener(name, callback) {
    if (this.listeners[name]) {
      this.listeners[name] = this.listeners[name].filter((item) => item !== callback);
    }
  }

  dispatchEvent(name) {
    if (this.listeners[name]) {
      for (let fn of this.listeners[name]) {
        fn();
      }
    }
  }
}

// Do not edit the line below.
exports.EventTarget = EventTarget;
