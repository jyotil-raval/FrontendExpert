function debounce(callback, delay, immediate = false) {
  let timeout;
  return function () {
    let connext = this;
    let args = arguments;
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        callback.apply(this, args);
      }
    }, delay);
    if (callNow) {
      callback.apply(connext, args);
    }
  };
}

// Do not edit the line below.
exports.debounce = debounce;
