
var a = 5;
var b = 6;

function add(num1, num2) {
    console.log(num1, num2);
    console.log("this-----",this)
    var result = num1 + num2;
    return result;
}

let add1 = add(a, b);
let add2 = add(10, 20);

console.log(add1)
console.log(add2)
