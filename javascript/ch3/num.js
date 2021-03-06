//  数值
const max = Number.MAX_VALUE;
const min = Number.MIN_VALUE;
const safeMax = Number.MAX_SAFE_INTEGER;
const safeMin = Number.MIN_SAFE_INTEGER;
console.log(max);
console.log(min);
console.log(safeMax);
console.log(safeMin);

let x = 0.3;
let y = 0.2;
console.log(x - y);

x = 0.2;
y = 0.1;
console.log(x - y);

console.log(BigInt(Number.MAX_SAFE_INTEGER));

const str = `1${'0'.repeat(100)}`;
console.log(str);
console.log(BigInt(str));

// 时间
const time = Date.now();
console.log(time);
const now = new Date();
const ms = now.getTime();
const iso = now.toISOString();
console.log(now);
console.log(ms);
console.log(iso);

// null与undefined
const nu = null;
console.log(nu, typeof (nu));

// 符号
const strname = 'string name';
const symname = Symbol('propname');
console.log(typeof (strname));
console.log(typeof (symname));
console.log(symname);
const o = {};
o[strname] = 1;
o[symname] = 2;
console.log(o[strname]);
console.log(o[symname]);
// console.log(Symbol('foo') === Symbol('foo'));
console.log(Symbol('foo').toString());

const s = Symbol.for('same');
const t = Symbol.for('same');
console.log(s === t);
console.log(s.toString());
console.log(Symbol.keyFor(t));

// 不可修改的原始值与可修改的对象引用
const ss = 'hello';
console.log(ss.toUpperCase());
console.log(ss);

const obj = { x: 1 };
console.log(obj);
obj.x = '1';
obj.y = '2';
console.log(obj);
obj.x = 3;
console.log(obj);

const arr = [1, 2, 3];
console.log(arr);
arr[0] = -1;
console.log(arr);

const aArr = [1, 2, 3];
const bArr = Array.from(aArr);
console.log(bArr);

// 类型转换
console.log('10' + 'object');
console.log('7' * '4');
console.log(String(null));
console.log(String(undefined));

console.log({ x: 1, y: 1 }.toString());
console.log([1, 2, 3].toString());
console.log(function add(xz) { const aa = xz; return aa + 1; }.toString());
