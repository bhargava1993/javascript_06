let firstname = "bhargava     ";

let copyFirstName = "   BHARGAVA reddy";

console.log(firstname.charAt(0).toUpperCase() + firstname.slice(1))
console.log("copyFirstName----",copyFirstName.trim().replace(" ",""))
console.log(`${firstname.trim().length} ${copyFirstName.trim()}`)



// "bhargavaReddySoftware"

// "bhargavareddysoftware"

console.log(parseInt(10) === parseInt("10"))

console.log(parseInt("10"))
console.log(typeof 10)
console.log(typeof parseInt("10"))
console.log(typeof +"10")

console.log(firstname.trim())
console.log(copyFirstName.trim())

console.log(firstname.toLowerCase().trim())
console.log(copyFirstName.toLowerCase().trim())

if( firstname.toLowerCase().trim() === copyFirstName.toLowerCase().trim()){
    console.log("sucess")
}else{
    console.log("fail")
}





