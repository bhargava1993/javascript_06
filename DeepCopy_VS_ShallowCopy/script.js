
let name = "avinash";

let copyName = name;

// console.log("copyName---1-",copyName)

copyName = "anil";

// console.log("name----",name);
// console.log("copyName---2-",copyName)

// ------------------------------------

let person1 = {
    name: "avinash",
    age: "20",
    totalMarks: 440,
    subjectMarks: {
        maths: 60,
        english:30
    }
}

console.log("-------------",JSON.stringify(person1))

let person2 = JSON.parse(JSON.stringify(person1))

person2.name = "koushik"
person2.subjectMarks.maths=90

console.log("person1----", person1)
console.log("person2----", person2)


let array = [10, 20, 30, 40, [100,200]]

// { 0: 10, 1: 20, 2: 30, 3: 40 }
// console.log(...array)

let copyArray = [...array];

copyArray.push(50)

copyArray[4]=[100,200,300]

console.log("array-------",array);
console.log("copyArray-------",copyArray);

// console.log(typeof person1)
// console.log(Array.isArray(array) )

// console.log(person1 instanceof Object)
// console.log(typeof array)

// ---------------------------------------
// garbage collection:
// memory leak
