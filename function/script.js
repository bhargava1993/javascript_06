// qutoes:
// 1. single -''
// 2. double -""
// 3. template litarals -`` 

// let string= "software devloper";

// console.log('bhargava is a'+" "+string);
// console.log("bhargava is a" +" " +string);

// console.log(`bhargava is a ${string}`);


// date function:

// let date = new Date();

// console.log(date)
// console.log(new Date().getDate())
// console.log(new Date().getMonth()+1)

// console.log(date.getFullYear())
// console.log(date.getTime()) - epoch time
// console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)


// 28/4/2026
// 2026/4/28
// 28-4-2026


// pure/ impure functions:
// -----------------------

// pure: same input same output
// impure: same input but different output

// difficulties:

// 1. result should be predictable 
// 2. testing aslo bit diffiult

let c = 0;

function add(a, b) {
    return a + b + c++;
}

// console.log(add(2,3))
// console.log(add(2,3))
// console.log(add(2,3))

// let ramdom = Math.floor(Math.random()*900000).toString().padStart(6,'0');
// console.log(ramdom)


function add(a, b) {
    return a + b;
}

// console.log(add(2, 3))

// function expression:
// ----------------------

const add1 = (a, b) => {
    return a + b;
}
// console.log(add1(5, 6))

let add2 = (a, b) => a + b;
// console.log(add2(15, 6))

let add3 = name => `hello ${name}`;

// console.log(add3("prem"))

// console.log(this)

// anonymous
// function (){

// }

// ()=>{

// }

// setTimeout(
//     () => {
//         console.log("bhargava")
//     },
//     5000)

// setInterval(() => {
//     console.log("bhargava")
// }, 1000)

// let i=0;

// function count(endValue){
   

//     count();
   
   
// }

// count(0)



// function sample(a, name,fn){
//     console.log("a--",a)
//     console.log("name---",name)
//     console.log("fn--",fn)

//     return "smaple"
// }

// function sample2(){

// }

// function sample3(){

//      let nameLess = ()=>{

//     }

//     return nameLess;

// }

// console.log(sample3())

// sample(5,"bhargava", sample2)

let myRadiusArray = [1,2,3,4,5]
 let pi = 3.14;

function caluculateArea( myRadiusArray){
    
    let result =[]
    for(let val of myRadiusArray){
         result.push(pi*val*val);
    }
    // let result = pi*radius*radius;

    return result

}

// console.log(caluculateArea(myRadiusArray));

function circumference(radius){
    return 2*pi*radius;
}

function findDiameter(radius){
    return 2*radius;
}

// console.log(caluculateArea(5))

function calculate(myRadiusArray, logic){

    let result=[];
    for(let val of myRadiusArray){
        result.push(logic(val))
    }

    return result;

}


// console.log(calculate(myRadiusArray, caluculateArea))

// console.log(calculate(myRadiusArray, findDiameter))

// console.log(calculate(myRadiusArray, circumference))


// simple calculator
// -------------------------------
function addition(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function caluculator(input1, input2, logic){
    // console.log(logic)
    return logic(input1,input2)

}

console.log(caluculator(2,3,sub));
console.log(caluculator(2,3,addition));
console.log(caluculator(2,3,mul));









