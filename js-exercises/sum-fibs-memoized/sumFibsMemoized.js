let num1 = 1;
let num2 = 1;
let sum = 0;
let i = 0;
let finalSum = num1 + num2;
function sumFibs(num) {
  if (num === 1) return 1;
  if (num === 2) return 2;

  for (i = 0; i < num; i + 1) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    if (num2 % 2 !== 0 && num2 <= num) {
      finalSum += num2;
    }
  }
  return finalSum;
}

function cacheFunction() {}

export { sumFibs, cacheFunction };
