

function add(a,b){
    return a+b;
}

// add(2,5);
// console.log(add(2,5));


function add1(a){
    a= 10+a;
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(add1(2)(5)(3));

// ()()()()