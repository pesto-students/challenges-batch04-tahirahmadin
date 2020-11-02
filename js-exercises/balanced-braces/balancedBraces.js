function balancedBraces(string) {
  const machingBraces = {
    ']': '[',
    '}': '{',
    ')': '(',
  };
  const stack = [];
  for (const Char of string) {
    if (Object.values(machingBraces).includes(Char)) {
      stack.push(Char);
    } else if (Object.keys(machingBraces).includes(Char)) {
      if (stack.pop() !== machingBraces[Char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export { balancedBraces };
