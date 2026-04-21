

// function <finction_name>(parsm1, parms2, prame3){
// return "";
// }

// finction_name();


// function hello() {
//      console.log(5+6)

//      return 5+6;
// }

// console.log(hello());



// function checkBanalnce(withdrawAmount, username){

//     console.log("checkBanalnce fn-withdrawAmount-",withdrawAmount);
//     console.log("checkBanalnce fn-username-",username);
//     var balance = 1000;

//     balance = balance - withdrawAmount;
//     console.log("balance---",balance)
//     return balance;

//     // this code it won't run
//     balance = balance-100;

//     console.log("32-------",balance);
// }

// console.log(checkBanalnce(300));


// var numberArray = [1, 30, 45, 100, 60, 75, 900, 4, 11, 1000, 56, 89, 950];

// var numberArray = [1, 5, 10, 9, 7];

// find Max And Min Number program

function findMaxAndMinNumber(numberArray) {

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

    return {
        "maxNumber": maxNumber,
        "secondMaxNumber": secondMaxNumber
    }

}


// console.log(findMaxAndMinNumber([1, 30, 45, 100, 60, 75, 900, 4, 11, 1000, 56, 89, 950]));

// console.log(findMaxAndMinNumber([1, 5, 10, 9, 7]));

// console.log(findMaxAndMinNumber([100,200,150,350,500,201,305]));



function reverse(input) {

    if (typeof input === "string") {
        var reversString = "";

        for (var i = input.length - 1; i >= 0; i--) {
            reversString = reversString + input[i];
        }

        return reversString;
    }

    // console.log(typeof input)

    if (typeof input === "object") {
        var reversarray = [];

        for (var i = input.length - 1; i >= 0; i--) {
            reversarray.push(input[i])
        }

        return reversarray;
    }

}

console.log(reverse("blackberry"))

console.log(reverse(["apple", "banana", "orange", "watermelon", "grapes", "mango",
    "blueberry", "blackberry", "raspberry", "strawberry"]))