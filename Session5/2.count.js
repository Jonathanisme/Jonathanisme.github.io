

var counter = 0;
function countUp() {
    counter += 1;
    document.querySelector("#display").innerHTML = counter;
}

function countDown() {
    counter -= 1;
    document.querySelector("#display").innerHTML = counter;
}

document.querySelector('#btnCountUp').onclick = () => {
    countUp();
};

document.querySelector('#btnCountDown').onclick = () => {
    countDown();
};