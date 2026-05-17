
multi threading - java, python, .net 

synchronous vs asynchoronous: javascript, node.js

worker threads:

multi tasking: 

synchronous:  --> serious --> line by line code excqution

1. it will execute one task at a time

asynchoronous:  network api calls

1. callbacks
2. promises --> all, race, any,
3. async/await

4. generators



promises:   

    1. pending
    2. fullfilled/ resolve / success
    3. rejected / failure


To fullfill your gole:
----------------------

1. process of you work === pending

2. achive your gole == fullfilled

3. when you are not achive your gole == rejected state


syntax: 
-------

let Betch = new Promise(
    (resolve, reject)=>{
        // your work
        // logic

        if(true){
            resolve("I have successfully comiple my Betch")
        }else{
            reject("failure")
        }
    }
)


Betch
    .then((result)=>{
        console.log("result----",result)
    })
    .catch((error)=>{
        conosle.log("error----",error)
    })



async/ await:
-------------

async function gole(){

    try{

    let goleAchive = await  goleJurney();
    }catch(error){
        console.log(error)
    }

}

gole()