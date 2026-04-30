let array = ["apple", "banana", "orange", "watermelon",
    "grapes", "mango",
    "blueberry", "blackberry", "raspberry", "strawberry"]

// rugular way
// for(let i=0; i<=array.length-1;i++){
//     console.log(array[i])
// }

// for (let val of array) {
//     console.log(val)
// }

let obj= {
    name: "bhargava",
    id: 1,
    marks: 500,
    marksSem: {
        sem1: {
            maths: 90
        },
        sem2:{
            java: 90
        }
    }
}

console.log(Object.keys(obj));
// console.log(obj["name"])
// console.log(obj["id"])
// console.log(obj["marks"])

// for(let i=0; i <= Object.keys(obj).length-1;i++){

//     // obj[Object.keys(obj)[i]]
//     console.log(obj[Object.keys(obj)[i]]);

// }

for( let key in obj){
    
    // console.log(obj[key])
    // console.log(`${key} : ${obj[key]}`)
}


// bhargava
// anil


