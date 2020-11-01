function balancedBraces(string) {
  const splittedString = string.split('');
  const arrayWithValues = [];
  splittedString.map((element) => {
    if (element === '[') {
      arrayWithValues.push(-1);
    }
    if (element === ']') {
      arrayWithValues.push(1);
    }
    if (element === '{') {
      arrayWithValues.push(-2);
    }
    if (element === '}') {
      arrayWithValues.push(2);
    }
    if (element === '(') {
      arrayWithValues.push(-3);
    }
    if (element === ')') {
      arrayWithValues.push(3);
    }
    return null;
  });
  const stack = [];
  for (let i = 0; i < arrayWithValues.length; i += 1) {
    if (arrayWithValues[i] === -stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(arrayWithValues[i]);
    }
  }
  return stack.length === 0;
}

export { balancedBraces };
