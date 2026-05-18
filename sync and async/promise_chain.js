
function step1() {
    return new Promise((resolve, reject) => {

        if (true) {
            setTimeout(() => {
                resolve("step1 is done")
            }, 2000)
        } else {
            setTimeout(() => {
                resolve(false)
            }, 2000)
        }
    })
}

function step2() {
    return new Promise((resolve, reject) => {

        if (true) {
            setTimeout(() => {
                resolve("step2 is done")
            }, 2000)
        } else {
            setTimeout(() => {
                resolve(false)
            }, 2000)
        }
    })
}

function step3() {
    return new Promise((resolve, reject) => {

        if (true) {
            setTimeout(() => {
                resolve("step3 is done")
            }, 2000)
        } else {
            setTimeout(() => {
                resolve(false)
            }, 2000)
        }
    })
}

async function run() {

    try {

        //all
        const [result1, result2, result3] = await Promise.all([step1(), step2(), step3()])
        console.log("result1---", result1)
        console.log("result2---", result2)
        console.log("result3---", result3)


        //race
        //allSettled
        //any
    } catch (error) {
        console.log("error-------", error)
    } finally {
        console.log("finally block done")
    }

}

run()


// -----------------------------------
// async function run() {

//     try {
//         const res1 = await step1();
//         console.log(res1)
//         if(!res1){
//             throw new Error("something went wrong step2 is failed")
//         }
//         const res2 = await step2();
//         console.log(res2)
//         if(!res2){
//             throw new Error("something went wrong step2 is failed")
//         }
//         const res3 = await step3();
//         console.log(res3)
//         if(!res3){
//             throw new Error("something went wrong step2 is failed")
//         }
//     } catch (error) {
//         console.log(error)
//     } finally{
//         console.log("finally block executed")
//     }

// }

// run();

// ----------------------------------------------
// step1()
//     .then(result => {
//         console.log("result step1---",result)
//         return step2(result)
//     })
//     .then(result => {
//         console.log("result step2---",result)
//         return step3(result);
//     })
//     .then(result => console.log("result----", result))
//     .catch((error) => console.log("error---", error))
//     .finally(() => { console.log("finally block done") })

// ------------------------------------------

// good coding pratcie
// step1()
//     .then((result) => {
//         console.log("step1 result---", result)
//         if(result === false){
//             throw new Error("something went wrong step1 is failed")
//         }else{
//              return step2()
//         }
//     })
//     .then((result)=>{
//         if(result === false){
//             throw new Error("something went wrong step2 is failed")
//         }else{
//              return step3()
//         }
//     })
//     .then((result)=>{
//         if(result === false){
//             throw new Error("something went wrong step3 is failed")
//         }else{
//             console.log("stpe3 reuslt----", result)
//         }
//     })
//     .catch((error) => {
//         console.log("error---", error)
//     })
//     .finally(() => {
//         console.log("finally always runs")
//     })




// -------------------------
// task
// orderPizza
// preparePizza
// pickUpPizza
// deliverPizza