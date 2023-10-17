const timeHours = document.querySelector('.timer__create-hours')
let valueHours = document.querySelector('.timer__create-hours--value')
timeHours.addEventListener('click', (e) => {
    const clickElement = e.target
    newTime(clickElement, valueHours)
})

const timeMinute = document.querySelector('.timer__create-minute')
let valueMinute = document.querySelector('.timer__create-minute--value')
timeMinute.addEventListener('click', (e) => {
    const clickElement = e.target
    newTime(clickElement, valueMinute)
})

const timeSeconds = document.querySelector('.timer__create-seconds')
let valueSeconds = document.querySelector('.timer__create-seconds--value')
timeSeconds.addEventListener('click', (e) => {
    const clickElement = e.target
    newTime(clickElement, valueSeconds)
})

const newTime = (element, getTime) => {
    console.log(element)
    if (element.matches('.timer__create-minus')) {
        getTime.textContent -= 1
    } else if (element.matches('.timer__create-plus')) {
        getTime.textContent = Number(getTime.textContent) + 1
    }
}

const timerFunc = () => {
    valueSeconds.textContent -= 1
    if (valueSeconds.textContent === '0') {
        valueMinute.textContent -= 1
        valueSeconds.textContent = 59   
    }
    if (valueMinute.textContent === '0') {
        valueHours.textContent -= 1
        valueMinute.textContent = 59
    }
}

const start = document.querySelector('.timer__create-start')
start.addEventListener('click', () => {
    setInterval(timerFunc, 1000)
})