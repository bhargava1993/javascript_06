// spread && rest:    ...

// spread:

// console.log([10,20,30,40])

// console.log(10,20,30,40)


// let array = [10,20,30,40];

// array.push(50)

// console.log("array----",array)

// console.log(...array)

// let newArray = [...array];

// console.log("newArray----",newArray)

// newArray.push(60)
// console.log("array----",array)
// console.log("newArray----",newArray)

// for(let val of array){
//     console.log(val)
// }




// let  [product_price, product2_price, ...remaingValue]  = [10,20,30,40];

let [product_price, product2_price, ...remaingValue] = [10, 20, 30, 40];

// console.log(product_price)
// console.log(product2_price)
// console.log(remaingValue)


// function sample(inputNames){
//     // console.log(names)

//     let [name1, name2, ...names] = inputNames;
//     console.log(name1,name2,names)

// }

// function sample(name1,name2,...names){
//     console.log(name1)
//     console.log(name2)
//     console.log(names)
// }

// console.log(sample("bhargava","anil","jaswanth","avinash"))



let array1 = [10, 20, 30, 40];
let array2 = [50, 60, 70, 80];

let array3 = [500, 600, 700, 800];
// let mergeArray = [10, 20, 30, 40,50, 60, 70, 80]

// let mergeArray = array1;

// for (let val of array2) {
//     mergeArray.push(val);
// }

// for (let val of array3) {
//     mergeArray.push(val);
// }

// console.log(mergeArray)

let mergeArray = [...array1, ...array2,...array3];

// console.log(mergeArray)


let duplicateArray = [10,20,30,20,10,40,50,30];

// console.log([...new Set(duplicateArray)]);


let emp = {id: 1, name: "bhargava", marks: 340};

let emp2 = {job:"software", location:"bangalore"}

// let fullDetails = { ...emp, ...emp2};

let fullDetails =emp;

// fullDetails.job = emp2.job;
// fullDetails.location = emp2.location

// console.log(Object.keys(emp2))

// for(let i=0; i<=Object.keys(emp2).length-1;i++){
//     // console.log(Object.keys(emp2)[i]);
//     //  console.log(emp2[Object.keys(emp2)[i]]);
//     fullDetails[Object.keys(emp2)[i]] = emp2[Object.keys(emp2)[i]];
// }


for(let val in emp2){
    // console.log(val)
 fullDetails[val] = emp2[val]
}

console.log(fullDetails)







