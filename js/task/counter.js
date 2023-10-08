let down = document.querySelector('.down');
let number = document.querySelector('.number');
let up = document.querySelector('.up');

let numberNow = 0;

up.addEventListener('click', function() {
    if (document.getElementById("one").checked) {
        numberNow++;
    } else if (document.getElementById("ten").checked) {
        numberNow += 10;
    } else if (document.getElementById("oneHundred").checked) {
        numberNow += 100
    }
    number.textContent = numberNow;
})

down.addEventListener('click', function() {
    if (document.getElementById("one").checked) {
        numberNow--;
    } else if (document.getElementById("ten").checked) {
        numberNow -= 10;
    } else if (document.getElementById("oneHundred").checked) {
        numberNow -= 100
    }
    number.textContent = numberNow;
})