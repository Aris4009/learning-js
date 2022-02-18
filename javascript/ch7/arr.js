// 数组字面量创建数组
const arr1 = [];
console.log(arr1);
const arr2 = [2, 3, 4, 5, 6];
console.log(arr2);
const arr3 = [1, '2', [1, 2, 3]];
console.log(arr3);

const base = 1024;
const arr4 = [base * 1, base * 2, base * 3, base * 4];
console.log(arr4);

// 稀疏数组
const arr5 = [1,, 3];
console.log(arr5.length, arr5, arr5[1]);

// 扩展操作符
const arr6 = [1, 2, 3, 4];
const arr7 = [0, ...arr6, 5];
console.log(arr7);
console.log([...'abcde']);
// 扩展操作符是浅拷贝
const arr8 = [1, { x: 1, y: 2 }, 'dd'];
const arr9 = [...arr8];
console.log(arr8);
console.log(arr9);
arr9[1].y = 4;
console.log(arr8);
console.log(arr9);

// 通过Array()构造函数创建数组
const arr10 = new Array();
console.log(arr10.length, arr10);
const arr11 = new Array(10);
console.log(arr11.length, arr11, arr11[0]);

// Array.of()可创建只包含一个元素的数组
const arr12 = Array.of();
const arr13 = Array.of(10);
const arr14 = Array.of(1, 2, 3);
const arr15 = Array.of(...arr8);
console.log(arr12, arr13, arr14, arr15);

// 数组方法
// 数组迭代器方法
const arr16 = [1, 2, 3, 4, 5];
let sum = 0;
arr16.forEach((value) => { sum += value; });
console.log(sum);
arr16.forEach((v, i, arr) => {
  const tmp = arr;
  tmp[i] = v + 1;
});
console.log(arr16);

// flat() faltMap()
const arr17 = [1, 2, 3, [4, 5]];
console.log(arr17.flat());
const arr18 = [1, 2, 3, [4, [5, 6]]];
console.log(arr18.flat());
const arr19 = [1, 2, 3, [4, [5, [6]]]];
console.log(arr19.flat(1), arr19.flat(2), arr19.flat(3));

// concat()方法创建并返回一个新数组
const arr20 = [1, 2, 3, 4, 5];
console.log(arr20.concat([6, 7], [8, 9]));
// arr20并没有改变
console.log(arr20);
// 不会打平嵌套数组
console.log(arr20.concat([6, 7], [8, [9]]));

// push(),pop(),shift(),unshift()实现栈和队列的操作
const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
stack.pop();
console.log(stack);

// 数组切片
const arr21 = [1, 2, 3, 4, 5];
console.log(arr21.slice(0), arr21.slice(2, 10), arr21.slice(2, -1), arr21);
const arr22 = arr21.slice(2, -1);
console.log(arr22);
arr22.push(99);
console.log(arr22, arr21);

// 数组插入删除
const arr23 = [1, 2, 3, 4, 5];
const arr24 = arr23.splice(3);
console.log(arr23, arr24);
arr23.splice(2, 0, ['a', 'b']);
console.log(arr23);

// 排序
const arr26 = [3, 99, 0, -1, 2];
arr26.sort();
console.log(arr26);

// join
const arr27 = [1, 2, 3, 4, 5];
console.log(arr27.join());
console.log(arr27.join(''));
console.log(arr27.join(','));

// isArray()
console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
