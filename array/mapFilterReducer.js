// let array = [1, 12, 33, 44, 5];

// multiply with 2
// result: [2,24,66,88,10]

// let result = []
// for(let i=0; i<=array.length-1;i++){
//     result.push(array[i]*2)
//     // console.log(array[i]*2);
// }
// console.log(result);


// --------------------------
// forEach

// let array = [1, 12, 33, 44, 5];
// let result = [];

// array.forEach(function (val, index, arr){
//     console.log("index---",index, val, arr)
//     // console.log("val---",val)

//     // result.push(val*2)
// });


// array.forEach((val)=> result.push(val*2));

// console.log(result)

// console.log(array.forEach((val)=> val *2))

// ----------------------------
// map

// let array = [1, 12, 33, 44, 5];

// let result = array.map(function (val,index, array){
//     // console.log(val, index, array)

//     return val*2;
// });

// console.log(array.map(function (val,index, array){
//     // console.log(val, index, array)

//     return val*2;
// }))

// let result = array.map((val)=> val*2);

// console.log(result)

// ---------------------------------

//filter

// let array = [34,-2, 67, 23, -3, 80, 90, 10, -1,35];

// let result = array.filter((val)=>{
//     // console.log(val < 0);
//     return val>=35;
// })

// let result = array.filter((val)=> val >= 35)
// console.log(result)

// let mapResult = array.map((val)=> 
//     {
//         if(val >=35){
//             return val;
//         }

//     }) 

// let mapResult = array.map((val)=> val-2)

// console.log(mapResult);


// -------------------------------
// Reduce

let array = [10, 20, 30, 40, 50]

console.log(array.indexOf(40))



let result = array.reduce((accumulator, currentValue)=>{
    // console.log(accumulator, currentValue);
    return accumulator = accumulator + currentValue
}, 2)

console.log(result)
// let total = 0;

// for (let i = 0; i <= array.length - 1; i++) {
//     // console.log(array[i])

//     total = total + array[i]
// }

// console.log(total)








