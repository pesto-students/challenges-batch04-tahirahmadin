function curry(func) {
  return function curriedFunc(...args) {
    if (args.length === func.length) {
      return func(...args);
    }
    return function (...args2) {
      return curriedFunc(...args.concat(args2));
    };
  };
}
export { curry };
