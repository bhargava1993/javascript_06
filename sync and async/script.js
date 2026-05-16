// console.log("say hellow")

// pip script.py


// int salary = 10000;


// typescript: tsc .ts

// let salary:number ="1000";

// salray = 1000;


// function sample(a:number,b:number){
//     let add = a+b
// }



function sample(){
    return "sample task"
}

function sample2(){
    return "sample2 task"
}


console.log("task 1");

setTimeout(()=>{
    console.log(sample())
},3000)

console.log("task 2");

setTimeout(()=>{
    for(let i=0;i<5;i++){
    console.log(i)
    }
},2000)

console.log("task 3");

setTimeout(()=>{
console.log(sample2())
},1000)

setTimeout(()=>{
 console.log("task 4");
})

console.log("task 5");



