let valueX = document.querySelector('.colorChange__x-value')
let colorBlock = document.querySelector('.colorChange')

colorBlock.addEventListener('mousemove', (e) => {
    valueX.textContent = e.clientX
    colorBlock.style.backgroundColor = `hsl(${e.clientX} 80% 40%)`
})