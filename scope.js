// scope:
// ------

// variable 

// 1. global scope
// 2. block level scope - {}
// 3. functional scope

// global: outside {} 

// block level:
// -----------
// {

// }

// if(){

// }else if(){

// }

// functional scope:
// --------------------
// function sample(){

// }


function add() {
    //  var number = 3;
    // console.log("inside function---",number)

    var x = 10;

    if (true) {
        let x = 15;
    }

    console.log("x----", x)
}

if (true) {
    //  var number = 5;
    // console.log("block level---",number)
}

add();
var number = 2;
// console.log("outside function---",number)


// lexical -scope:
//lexical - envirent

function parent() {
    var property = 100;

    function child() {
        console.log("child-----",property);

        var addProprety = 50;


        function subchild() {
            console.log("subchild---", addProprety)
            var doubleProperty = 30;
        }

        subchild()
    }

    child()

}

parent()
