// login User
//     |
// get user profile 
//     |
// get user orders
//     |
// display final data


const loginUser = () => {

    return new Promise((resolve, resject) => {

        setTimeout(() => {

            let userData = {
                userid: 101,
                userName: "Koushik"
            }

            resolve(userData)
        }, 1000)

    })
}

const getUserProfile = (user) => {

    return new Promise((resolve, resject) => {

        setTimeout(() => {
            console.log("profile function---", user)
            resolve({
                ...user,
                city: "hindupur"
            })
        }, 1000)

    })
}

const getUserOrders = (profile) => {

    return new Promise((resolve, resject) => {

        setTimeout(() => {
            console.log("orders function---", profile)
            resolve({
                ...profile,
                order: ["laptops", "mobiles"]
            })
        }, 1000)

    })
}



// loginUser()
//     .then((userData) => {
//         console.log("user login---", userData)
//         return getUserProfile(userData)
//     })
//     .then((profile) => {
//         console.log("profile----", profile)
//         return getUserOrders(profile)
//     })
//     .then((finalData) => {
//         console.log("final data---", finalData)
//     })
//     .catch((error) => {
//         console.log("error---", error)
//     })
//     .finally(() => {
//         console.log("finally end")
//     })


// -----------------------------------
// async/await

const run = async () => {

    try {
        //step:1 login user

        const userData = await loginUser();

        //step:2 fetch profile info

        const profile = await getUserProfile(userData);

        //step:2 fetch order info

        const finalData = await getUserOrders(profile);

        console.log("finalData----", finalData)
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log("finally ends")
    }


}

run()



// create 3 async functions

// for loop 5 

// output
// 1st 1
// 2nd 2
// 3rd 3

// 1st 1
// 2nd 2
// 3rd 3

// 1st 1
// 2nd 2
// 3rd 3

// 1st 1
// 2nd 2
// 3rd 3

// 1st 1
// 2nd 2
// 3rd 3