// desturucture:

// structure:

// let marksArray= [91,82,83,94,75]

// let maths = marksArray[0];
// let english = marksArray[1];
// let c_lan= marksArray[2]
// let dbms = marksArray[3]
// let java = marksArray[4]

let [maths, , c_lan, , java] = [91, 82, 83, 94, 75]


// console.log(maths)
// // console.log(english)
// console.log(c_lan)
// // console.log(dbms)
// console.log(java)

// Object destructuring:
// -----------------------

let user = {
    id: 1, name: "bhargava",
    education: "mca", "job": "software"
}

let username = user.name;
// console.log(user.name)
// console.log(user.job)
// console.log(user.id)
// console.log(user.education)

// let { name, job } = {
//     id: 1, name: "bhargava",
//     education: "mca", "job": "software"
// }

// console.log(name)
// console.log(job)

let { name:userName, job } = {
    id: 1, name: "bhargava",
    education: "mca", "job": "software"
}

console.log(userName)