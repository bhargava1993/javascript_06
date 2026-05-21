//corn job


// 1. setTimeout() - runs a function once after a delay
// 2. clearTimeout() - stops a timeout before it executes.

// 3. setInterval() - runs a function again and again repeatedly after a fixed interval
// 4. clearInterval() - it stops a repeating interval


//anonamus function
// ()=>{}

// function (){ }

// setTimeout
// -----------------------------
// syntax: 
//  setTimeout(function, delay)

// setTimeout(()=>{
//     console.log("hellow world")
// }, 5000)

//clearTimeout
// -------------------------
// function greetings(){
//     console.log("Happy Birthday Avinash");
// }

// let stopWishing = setTimeout(greetings, 4000);

// clearTimeout(stopWishing)


// setInterval
// -----------------------------

// syntax: setInterval(function, interval)

// setInterval(()=>{
//     console.log("running every 2 seconds")
// }, 2000)

// let datePrint = setInterval(()=>{

//     console.log(new Date().toLocaleTimeString())

// },2000)

// clearInterval
// -----------------------
// let datePrint = setInterval(()=>{

//     clearInterval(datePrint)
//     console.log(new Date().toLocaleTimeString())

// },2000)


// let count = 0;

// let inteval = setInterval(()=>{
//     console.log(count)
//     count++;

//     if(count === 10){
//         clearInterval(inteval)
//     }

// }, 1000)


// for (var i = 0; i <= 5; i++) {

//     ((i) => {
//         setTimeout(() => {
//             console.log(i)
//         }, 3000)
//     })(i)

// }


// (function (i){
//     console.log(i)
//     setTimeout(()=>{

//     },1000)
// })(10)