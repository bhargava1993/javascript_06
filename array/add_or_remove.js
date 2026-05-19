
const skillsArray = ["html", "css", "node.js", "react.js"]

// this is for string
// --------------------------
// split --> will work with String, output it will give it in to Array, it won't modify your original string

// these methods are userd for array
// -------------------------------------
//slice --> it extracts part of an array without chaging the original array

//splice --> Add, Removes, Replace elements in array
// it will changes your original array

// split
// --------------
// syntax
// String.split(saparator, limit);

const string = "hellow World";

let result = string.split(" ");

// console.log("result---",result)
// console.log("string---",string)

let fruits = "apple@banana@mango"
let fruitsArray = fruits.split("@");
// console.log(fruitsArray)

//with limit
let text = "red blue green yellow";
let colorsArray = text.split(" ", 2);
// console.log(colorsArray)



// splice

// Array.slice(startIndex, endingIndex)

let array = ['red', 'blue', 'green', 'yellow', "black", "orange", "white", "navyblue"]

// console.log(array.slice(2,5));
// console.log(array.slice(5));



// splice

// syntax
// array.splice(start, deleteCount, item1, item2, ......... )


let arrayColors = ['red', 'blue', 'green', 'yellow', "black", "orange"]

arrayColors.splice(2, 0, "white", "pink")

// console.log(arrayColors)



let NumberArray = [10, 5, 6, 8, 5]


[10,5]     [5,6]  [6,8] [8,5]

[10,5,6]  [5,6,8] [6,8,5]


// what is subarray , 2, 3, 4
//sum of sub array
// max subarray


[[10,5], [5,6], [6,8], [8,5]] - 2
[[10,5,6], [5,6,8], [6,8,5]] -3
[[10,5,6,8],[5,6,8,5]] - 4

function sumOfSubarray(subarraylength, inputArray){

}

sumOfSubarray(2,NumberArray)

sum = 15, subarray=[10,5]

