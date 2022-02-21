// 函数也可以包含属性
function increase() {
  increase.count += 1;
  return increase.count;
}
increase.count = 0;
console.log(increase());
console.log(increase());

// 匿名函数
(function () {
  console.log('立即调用');
}());

// 闭包
const scope = 'global scope';
function checkScope() {
  const scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}
console.log(checkScope());
const scope1 = 'global scope';
function checkScope1() {
  const scope1 = 'local scope';
  function f() {
    return scope1;
  }
  return f;
}
const s = checkScope1()();
console.log(s);
const increase1 = (function increase1() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}());
console.log(increase1());
console.log(increase1());
