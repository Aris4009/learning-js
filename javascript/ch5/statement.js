// for/of用于可迭代的对象，数组、字符串、集合和映射都是可迭代的对象
const arr = [1, 2, 3, 4];
let sum = 0;
function add() {
  for (const item of arr) {
    sum += item;
  }
  return sum;
}
console.log(add());
let sum2 = 0;
arr.forEach((n) => { sum2 += n; });
console.log(sum2);

const obj = { x: 1, y: 2 };
for (const k of Object.keys(obj)) {
  console.log(k);
}

for (const v of Object.values(obj)) {
  console.log(v);
}
for (const [k, v] of Object.entries(obj)) {
  console.log(`k:${k}`, `v:${v}`);
}

const frequency = {};
for (const s of 'miss') {
  if (frequency[s]) {
    frequency[s]++;
  } else {
    frequency[s] = 1;
  }
}
console.log(frequency);
