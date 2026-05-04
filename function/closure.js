
// function count(){
//     let i=0;
//     i++;
//     return i;
// }

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());



// function outer() {
//     let property = 10;

//     return function inner() {
//         property++;
//         console.log("inside counter function", property);
//         return property;
//     }

// }


// let counter = outer();

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())


// function increment(){
//     count++;
//     return count;
// }

// console.log(counter());
// // console.log(increment())
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());





// function outer(){
//     let counter = 0;

//     return function inner(){
//         counter++;
//         console.log(counter)
//     }
// }

// console.log(outer())
// let counter = outer();

// counter();
// counter();



// for (var i = 0; i <= 5; i++) {

//     ((i) => {
//         setTimeout(() => {
//             console.log(i)
//         }, 1000)
//     })(i)

// }



function createBankAccount(){
    let balance = 0;
    return {

        deposit(amount){       
            balance = balance + amount;
            console.log("deposit----",balance)
        },

        withdraw(amount){
            balance = balance - amount;
            console.log("withdraw----",balance)

        }

    }
}

let account =  createBankAccount();

account.deposit(100);
account.deposit(200);
account.withdraw(50);
account.withdraw(30);