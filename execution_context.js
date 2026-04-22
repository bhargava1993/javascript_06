// ther are 2 types of execution context:

// 1. global Execution context
// 2. function execution context

// function expression


// const addtion = function (num1, num2) {
//     var ans = num1 + num2;
//     return ans;
// }


// var a = 2;
// var b = 3;

// function add(num1, num2) {
//     var ans = num1 + num2;
//     var result = num1 * num2;
//     var sub = num1 - num2
//     // return ans;
// }

// let add1 = add(a, b); //5
// let add2 = add(5, 6) // 11

// console.log(add1);
// console.log(add2);


// call stack:

// lifo: last in first out
// fifo: first in first out

// function one() {
//     console.log("one");
//     two()
// }

// function two() {
//     console.log("two");
//     three()
// }

// function three() {
//     console.log("three");
//     console.log("call stack")
//     return "call stack"
// }

// one();


// Hoisting:
// --------

// console.log(msg);



// greet();
// let greet = function(){
//     console.log(msg, " happy new year");
// }
let msg = "hello";

console.log(msg);

// temperory dead zone:
// ---------------------


