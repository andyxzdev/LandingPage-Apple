let nextButton = document.getElementById('nextButton')
let prevButton = document.getElementById('prevButton')
let container = document.querySelector('.home')
let items = container.querySelectorAll('.item')


let active = 0
let firstPosition = 1
let lastPosition = items.length -1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')


}

nextButton.onclick = () => {
    active = active + 1 > firstPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add('active')
}

prevButton.onclick = () => {
    active = active < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')
}