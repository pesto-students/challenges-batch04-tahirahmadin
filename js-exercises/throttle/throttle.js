function throttle(fn, timeInMs) {
  let flag = true;
  let result;
  return function (...args) {
    if (flag) {
      result = fn(...args);

      flag = false;

      setTimeout(() => {
        flag = true;
      }, timeInMs);
    }
    return result;
  };
}

export { throttle };
