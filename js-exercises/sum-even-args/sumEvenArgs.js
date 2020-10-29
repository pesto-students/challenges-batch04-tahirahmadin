const sumEvenArgs = (...args) => {
  const evenNumbers = args.filter((number) => number % 2 === 0);
  const evenSum = evenNumbers.reduce((a, b) => a + b, 0);
  return evenSum;
};

export { sumEvenArgs };
