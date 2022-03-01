// 定义类
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  include(x) {
    return this.from <= x && x <= this.to;
  }

  * [Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x += 1) {
      yield x;
    }
  }

  toString() {
    return `(${this.from}...$(this.to))`;
  }
}
const r = new Range(1, 3);
console.log(r.include(2));
console.log(r.toString());
console.log([...r]);
