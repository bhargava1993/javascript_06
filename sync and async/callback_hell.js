
//boilWater
//addTeaPouder
//add Milk and sugur
//serveTea


function boilWater(callback) {

    setTimeout(() => {
        console.log(" Water Boiled");
        callback();
    }, 1000)

}

function addTeaPouder(callback) {

    setTimeout(() => {
        console.log(" Add tea Pouder");
        callback();
    }, 1000)
}

function addMilkAndsugur(callback) {

    setTimeout(() => {
        console.log(" Add milk and Sugur");
        callback();
    }, 1000)
}

function serveTea(callback) {

    setTimeout(() => {
        console.log("Serve the tea");
        callback();
    }, 1000)
}



boilWater(() => {

    addTeaPouder(() => {

        addMilkAndsugur(() => {

            serveTea(() => {
                console.log("enjoy the tea")
            })
        })
    })
})





