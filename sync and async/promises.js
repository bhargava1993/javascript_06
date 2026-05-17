
// let myPromises = new Promise((resolve, rejected) => {

//     let marks = 30;

//     if(marks >= 35){
//         resolve("you passed")
//     }else{
//         rejected("you failed")
//     }

// })

// myPromises
//     .then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

// ------------------------------------------------

// function checkResult(marks) {

//     return new Promise((resolve, rejected) => {

//         if (marks >= 35) {
//             resolve("you passed")
//         } else {
//             rejected("you failed")
//         }
//     })

// }

// function checkResult1(marks) {

//     if (marks >= 35) {
//         return "you passed";
//     } else {
//         return "you failed";
//     }
// }

async function checkResult1(marks) {

    let response = await fetch("https://dummyjson.com/users");
    let data = await response.json();

    return data;

}

async function checkResult(marks) {
    try {
        const result = await checkResult1(marks);
        return result;

    } catch (error) {
        console.log(error)
    }
}



checkResult(50)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

// -----------------------------------------------


function downloadMovie(movie) {

    return new Promise((resolve, rejected) => {

        if (movie) {
            setTimeout(() => {
                resolve("movie download")
            }, 5000)

        } else {
            setTimeout(() => {
                rejected("download failed")
            }, 5000)

        }
    })

}

// downloadMovie("so close")
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// ---------------------------------------------


let fecthData = (url) => {

    return new Promise((res, rej) => {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                res(result)
            }).catch((error) => {
                rej(error)
            })
    })

}

// fecthData("https://dummyjson.com/users")
//     .then((result) => {
//         console.log("result----", result)
//     }).catch(error => {
//         console.log(error)
//     })

// ---------------------------------------------------------


let fetchDataFromAPI = async (url) => {

    try {

        let response = await fetch(url);
        let data = await response.json();

        return data;

    } catch (error) {
        console.log(error)
        return error;
    }

}

// fetchDataFromAPI("https://dummyjson.com/users")
//     .then((result) => {
//         console.log(result)
//     }).catch(error => {
//         console.log(error)
//     })

