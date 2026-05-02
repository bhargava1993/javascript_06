// immediatly invoked function

// function add(a,b){
//     return a+b;
// }

// console.log(add(2,5))


// (function(a,b){
//     console.log(a+b)
// })(2,5);


// (function(){
//     let password="123456"
//     console.log("hello developers")
// })();

// console.log(password)


for (var i = 0; i <= 3; i++) {
   
       (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 1000)
        })(i);

}


// { }
// setTimeout(function () {
//     console.log("bhargava")
// }, 5000)