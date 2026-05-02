
// console.log("firend1")
// console.log("firend4")
// console.log("firend2")
// console.log("firend3")
// console.log("firend5")

// setTimeout(function () {
//     console.log("bhargava")
// }, 3000)


function printName(callback, callback2){
    // console.log(callback)
    console.log("anil")
    let result = 2+5;

    callback2(result,callback)
    
}

function qualification(years){
    console.log("B.tech", years)
}

function printAge(result,callback){
    setTimeout(() => {
        console.log(22 + result)
        callback(4)
    }, 1000);
    
    // callback()
}

// printName(qualification,printAge)


// ------------------------------------


function greet(name){
    return `Hello ${name}`
}

function farewell(name){
    return `GoodBye ${name}`

}

function createStituation(name, fn){
    console.log(fn(name))

    return fn(name);
}

// console.log(greet("jaswanth"))
// console.log(farewell("jaswanth"))

console.log(createStituation("Vidya",farewell))




