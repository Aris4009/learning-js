// ?.条件式调用
const a = { b: null };
console.log(a?.b?.c);
const b = 1;

// ??缺值合并操作符
console.log(a ?? b);

// typeof操作符
console.log(typeof val);
console.log(typeof null);
console.log(typeof true, typeof false);
console.log(typeof 1, typeof NaN);
console.log(typeof BigInt(1));
console.log(typeof Symbol('name'));
console.log(typeof Math.max([1, 3]));

// delete操作符
const obj = { x: 1 };
delete obj.x;
console.log('x' in obj);

const arr1 = [1, 2, 3];
delete arr1[2];
console.info(arr1, 3 in arr1, arr1.length, arr1[2], arr1[4]);
