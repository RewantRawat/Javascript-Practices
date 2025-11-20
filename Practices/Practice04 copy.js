
function mySetTimeout(callback, delay) {
    const start = Date.now();

    while (Date.now() - start < delay) {

    }

    callback();
}


mySetTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);


// function mySetTimeout(callback, delay) {
//     const start = Date.now()
//     while (Date.now() - start < delay) {

//     }
//     callback()
// }

// mySetTimeout(() => {
//     console.log("The settimeout is working properly");

// }, 4000)

function mySetInterval(callback, delay) {
    const start = Date.now();

    let nextTime = start + delay;

    while (true) {
        if (Date.now() >= nextTime) {
            callback();
            nextTime += delay;
        }
    }
}

function mySetInterval(callback, delay, limit) {

    const start = Date.now();
    let nextTime = start + delay;
    let count = 0;

    while (count < limit) {
        if (Date.now() >= nextTime) {
            callback();
            count++;
            nextTime += delay;
        }
    }
}


mySetInterval(() => {
    console.log("Runs every 1 second");
}, 1000, 4);
