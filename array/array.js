// Array:

// methods: push, pop, shift, unshift


// var newArray = [2, 4, 6, 9, 10];

// console.log("before---",newArray);

// //ending of an array
// newArray.pop()
// newArray.push("bhargava")

// // Staring of the array
// newArray.shift()
// newArray.unshift(120)

// console.log("after---",newArray);



var newArray = ["apple", "banana", "orange", "watermelon", "grapes", "mango",
    "blueberry", "blackberry", "raspberry", "strawberry"];


// console.log(newArray.reverse());

// console.log(newArray[0])
// console.log(newArray[1])
// console.log(newArray[2])
// console.log(newArray[3])
// console.log(newArray[4])


// for(declaration; condition; increment/decrement){
// }


// console.log(newArray.length);

// for(var i=0 ; i <= newArray.length-1; i++){
//     console.log(newArray[i]);
// }

// reverse array
// var reversarray=[];

// for( var i=newArray.length-1; i >= 0 ;i--){
//     // console.log(newArray[i]);
//     reversarray.push(newArray[i])
// }

// console.log(reversarray);


// replace "orange" with "watermelon"


// for(var i=0; i<=newArray.length;i++){

//    if(newArray[i] === "orange"){
//         newArray[i] = "watermelon"
//    }

// }

// console.log(newArray);


// var fruitName = "blackberry";

// for(var i=0 ; i <= fruitName.length-1; i++){
//     console.log(fruitName[i]);
// }

// var reversString="";

// for(var i=fruitName.length-1; i>=0 ;i--){
//     // console.log(fruitName[i]);

//     reversString = reversString + fruitName[i];
//     // console.log(reversString);
// }

// console.log(reversString)


// console.log( y +"1" )

// var name="bhargava";

// name="jeswanth";

// console.log(name);




//polindrome 

// 1221 
// 2432

// Level
// Madam
// Minim
// Mom


// anagram
//factors
//factorial
//prime

// missing numbers:
var numbrs = [1, 3, 6, 8, 9, 10]


// find maxnumber
var numberArray = [1, 30, 45, 100, 60, 75, 900, 4, 11, 1000, 56, 89, 950];

// console.log(Math.max(...numberArray));

var maxNumber = numberArray[0];

var secondMaxNumber = numberArray[0];

for (var i = 0; i <= numberArray.length - 1; i++) {

    // console.log(numberArray[i])

    if (numberArray[i] > maxNumber) {
        secondMaxNumber = maxNumber;
        maxNumber = numberArray[i];
    } else if (numberArray[i] < maxNumber && numberArray[i] > secondMaxNumber) {
        secondMaxNumber = numberArray[i];
    }

}

// console.log(maxNumber);

// console.log("secondMaxNumber---",secondMaxNumber);



//find duplicates in array
let fruitsArray = ["blackberry", "apple", "banana", "orange",
    "watermelon", "raspberry", "orange", "mango", "grapes", "raspberry",
    "blueberry", "blackberry", "apple", "raspberry",
    "strawberry", "orange", "blackberry", "raspberry",
    "jesvanth", "vidya"];


// console.log(numArray.reverse())

// console.log(fruitsArray.includes("grapes"));

// console.log("before fruitsArray----", fruitsArray)
let isExists = true;
// here i am reaind my array elements
for (let i = 0; i <= fruitsArray.length - 1; i++) {
    // console.log(i, fruitsArray.length - 1);
    // here i am checking grapes elements exist or not
    if ("grapes" === fruitsArray[i]) {
        // console.log("grapes exists", i);
        isExists = false;
    }

    if (i === fruitsArray.length - 1 && isExists) {
        // console.log("inside for loop")
        // if (isExists) {
        fruitsArray.push("grapes");
        // }
    }
}

// console.log("isexists===", isExists)

// console.log("after fruitsArray----", fruitsArray)



console.log("fruitsArray---", fruitsArray.includes("apple"));
// console.log("fruitsArray---unique-", [...new Set(fruitsArray)]);

let uniqueArray = [];
let repetedvalues = [];

let notrepetedValues = [];

for (let i = 0; i <= fruitsArray.length - 1; i++) {
    // console.log("i---",i, fruitsArray.length, fruitsArray[i])

    if (uniqueArray.includes(fruitsArray[i])) {
        repetedvalues.push(fruitsArray[i])
    } else {
        uniqueArray.push(fruitsArray[i])
    }
}
console.log("fruitsArray---", fruitsArray);
// console.log("uniqueArray---",uniqueArray);
// console.log("repetedvalues---", repetedvalues);



// {key: value}
let uniqueObj = {}

let string = "jfknfknflkdsf jkasjlks fjdshflkjsdf jhdsLHFKSA"

console.log(string.split(" "))


// 121
// 1221
// MADAM
// .
// []


for (let i = 0; i <= fruitsArray.length - 1; i++) {

    if (uniqueObj[fruitsArray[i]]) {
        uniqueObj[fruitsArray[i]] = uniqueObj[fruitsArray[i]] + 1
    } else {
        uniqueObj[fruitsArray[i]] = 1
    }

}

// console.log("uniqueObj--", uniqueObj)
// console.log("uniqueObj--", Object.keys(uniqueObj))

longest polindrom:
-------------------

1. split and put it into array (split)
2. you need to loop that array
3. find polindrome
4. word count (length)
5. put object and find laragest polindrom