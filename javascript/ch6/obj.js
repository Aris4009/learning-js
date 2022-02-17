const obj1 = {};
console.log(obj1, typeof obj1);
const obj2 = new Object();
console.log(obj2, typeof obj2);
const obj3 = Object.create(Object.prototype);
console.log(obj3, typeof obj3);

// 继承
const o = {};
o.x = 1;
const p = Object.create(o);
p.y = 2;
const q = Object.create(p);
q.z = 3;
console.log(o.x);
console.log(p.x, p.y);
console.log(q.x, q.y, q.z);
o.x = 2;
console.log(o.x);
console.log(p.x, p.y);
console.log(q.x, q.y, q.z);
p.x = 3;
console.log(o.x);
console.log(p.x, p.y);
console.log(q.x, q.y, q.z);

// 删除属性
console.log(delete Object.prototype);

// 测试属性
console.log('x' in o);
console.log('x' in p);
console.log('y' in q);
console.log('toString' in o);
console.log('toString' in p);
console.log('toString' in q);
// 测试是否包含指定名称的属性，对于从原型链上继承的属性，将返回false
console.log(o.hasOwnProperty('x'));
console.log(Object.hasOwnProperty.call(o, 'x'));
console.log(Object.hasOwnProperty.call(o, 'toString'));
// 测试自有属性并且是可枚举的
console.log(o.propertyIsEnumerable('x'));
console.log(Object.propertyIsEnumerable.call(o, 'x'));
console.log(Object.propertyIsEnumerable.call(o, 'toString'));

// 测试可枚举
for (const e in q) {
  console.log(e);
}

for (const e in Reflect.ownKeys(q)) {
  console.log(e);
}

// 对象序列化
const m = { x: 1, y: { z: [false, null, ''] } };
console.log(JSON.stringify(m));
console.log(JSON.parse(JSON.stringify(m)));

// toString()方法
const obj4 = { x: 1, y: '1' };
console.log(obj4.toString());
const obj5 = {
  x: 1,
  y: '2',
  toString() {
    return `(${this.x},${this.y})`;
  },
  valueOf() {
    return this.x + Number(this.y);
  },
  toJSON() {
    return this.toString();
  },
};
console.log(obj5);
console.log(obj5.toString());
console.log(Number(obj5));
console.log(JSON.stringify([obj5]));

// 简写属性
const a = 1; const b = 2;
const obj6 = { a, b };
console.log(obj6);

// 计算的属性名
function computePropertyName(i) {
  return `p${i}`;
}
const obj7 = {
  [computePropertyName(10)]: 10,
};
console.log(obj7);

// 扩展操作符，把已有对象的属性复制到新对象中
const k1 = { x: 1, y: 2 };
const k2 = { p: 1, q: 2, x: 10 };
const k3 = { ...k1, ...k2 };
console.log(k3);

// 访问器属性
const obj8 = {
  name: 1,
  get getName() {
    return this.name;
  },
  /**
   * @param {(arg0: number) => void} name
   */
  set setName(name) {
    this.name = name;
  },
};
console.log(obj8.getName);
obj8.setName = 3;
console.log(obj8.getName);
