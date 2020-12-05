class Cycled extends Array {
  constructor(values) {
    super(...values);

    this.indexValue = 0;
  }

  get index() {
    return this.indexValue;
  }

  set index(indx) {
    this.indexValue = (this.length + (indx % this.length)) % this.length;
  }

  current() {
    return this.step(0);
  }

  next() {
    return this.step(1);
  }

  previous() {
    return this.step(-1);
  }

  step(value) {
    this.indexValue = (this.length + (this.indexValue + value)) % this.length;
    return this[this.index];
  }

  * [Symbol.iterator]() {
    let { length } = this;
    while (length > 0) {
      yield this.current();
      this.indexValue += 1;
      length -= 1;
    }
  }

  get reversed() {
    const arr = this;
    return function* getPrevValue() {
      while (true) {
        yield arr.previous();
      }
    };
  }
}

export { Cycled };
