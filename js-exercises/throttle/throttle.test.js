import { throttle } from './throttle';

describe('throttle', () => {
  test('It should return correct output', () => {
    const returningFn = function (a) {
      return a;
    };

    const func = throttle(returningFn, 1500);

    let t1 = setTimeout(() => {
      expect(func(10)).toEqual(10);
      clearInterval(t1);
    }, 0);
    let t2 = setTimeout(() => {
      expect(func(20)).toEqual(20);
      clearInterval(t2);
    }, 1700);
    let t3 = setTimeout(() => {
      expect(func(32)).toEqual(20);
      clearInterval(t3);
    }, 1800);
  });
});
