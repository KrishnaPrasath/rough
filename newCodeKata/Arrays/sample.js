// function add() {
//   return this.arr[0] + this.arr[1] + this.a + this.b;
//   //   return this.a + this.b + arr[0] + arr[1];
//   //   return this.a + this.b;
// }
// var m = 4;
// var n = 5;
// let obj = {
//   a: 1,

//   b: 2
// };

// let arr = [1, 2];

// console.log(add.apply(arr, obj));
// console.log(add.apply(obj, arr));
//ask stack overflow , why when you pass array and object using apply, the o?p is Nan, when I pass obj and arr, the op is a number

// var module = {
//   x: 42,
//   getX: function() {
//     return this.x;
//   }
// };

// var fun = module.getX;
// var fun2 = fun.bind(module);
// console.log(fun2());

// var a = {
//   x: 1,
//   y: 2
// };

// var p = 5;
// var q = 9;
// console.log(a);

// var fun = function() {
//   return this.z;
// };
// var newFun = fun.bind(a);
// a.z = 3;
// // console.log(newFun());

//////////////////Prototypal inheritance////////////////////
// var obj = function() {
//   this.a = 1;
//   this.b = 2;
// };

// var obj2 = new obj();
// console.log(obj2);

// obj.prototype.c = 3;
// obj.prototype.fun = function() {
//   d: 7;
// };

// console.log(obj2.c);
// console.info(obj2.fun);

/////////////////
/////////////////////
setInterval(fun, 500);
function fun() {
  console.log("hai");
}
