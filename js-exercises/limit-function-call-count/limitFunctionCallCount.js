const limitFunctionCallCount = (func, n) => {
  let matchCount = 0;
  return function (...args) {
    if (matchCount < n) {
      matchCount += 1;
      return func(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
