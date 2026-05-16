// function sample(){
//     return "sample task"
// }

// function sample2(){
//     return "sample2 task"
// }


// console.log("task 1");
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");
// console.log("task 5");
// console.log(sample());
// console.log(sample2());



// fetch("https://dummyjson.com/users")
// .then() --> success
// .catch() ---> error (failure)


// axios -->


// function getUser(){

//     let data;

//     fetch("https://dummyjson.com/users")
//     .then(response => response.json())
//     .then(result => {
//         data = result;
//         // console.log("data-------",data)
//     })
//     .catch((error)=> {
//         console.log("error----",error)
//     });

//     return data;
// }

// console.log(getUser());



function getData(url,callback) {

    fetch(url)
        .then(response => response.json())
        .then(result => {
            callback(result)// send data to callback
            // console.log("data-------",data)
            
        })
        .catch((error) => {
            console.log("error----", error)
        });

}

//callback function
function displayData(data) {
    console.log("displayData user Data:", data)
}

//calling parent function with callback function
getData("https://dummyjson.com/users",displayData)

// getData("http://localhost:3000/userData",displayData)

getData("https://jsonplaceholder.typicode.com/todos/1",displayData)
