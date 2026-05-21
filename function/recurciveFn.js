
// nested object

// {
//     key: value
//     key1:{
//         key2:{
//             key3:{

//             }
//         }
//     }
// }
// ----------------------

const userDetailsObj = {
    user: {
        profiles: {
            name: "Anil",
            address: {
                city: "kadiri",
               
                tempAddress: {
                    city: "madhanapalli"
                },
                marksArray:[50,60,80]
            },
            marks: {
                english: 80,
                maths: 70,
                social: 80
            },
            city:"bangalore"

        }
    },
    user2:{
        name:"bhargava"
    }
}

// find key based on value
// find value based on key
// find duplicate keys

function findkey(targertKey,inputObject){
    console.log("targertKey----",targertKey);
    console.log("inputObject---",inputObject)

    // findkey(targertKey,inputObject)
    // return "true";
}

console.log(findkey("madhanapalli",userDetailsObj))



// console.log(userDetailsObj.user.profile.name);
// console.log(Object.keys(userDetailsObj).length > 0)


// nullify --- ?.

// console.log(userDetailsObj?.user?.profiles?.address?.city)


// if (Object.keys(userDetailsObj).length > 0 && userDetailsObj.user && userDetailsObj.user.profile) {
    // console.log(userDetailsObj.user.profiles.name)


    // if(userDetailsObj.user){
    //     console.log("2nd if block")
    //     // throw new Error("3rd if block")
    //     if(userDetailsObj.user.profiles){
    //         console.log("3rd if block")
    //     }
    // }
    
// }
