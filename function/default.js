

function add(a,b=null){
    console.log(a)
    console.log(b)
    return a+b;
}

// console.log(add(2))

// console.log(add(2,20))


function discount(a, discount=0){
    let product = 100+10 - discount;
    return product;
}

let month = "feb"

if("january" === month){
    console.log(discount(10,20))
}else{
    console.log(discount(10))
}


