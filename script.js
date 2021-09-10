const cards = document.getElementsByClassName('card');
const rightButton = document.querySelector('.fa-angle-right');
const leftButton = document.querySelector('.fa-angle-left');
let i = 0;

rightButton.addEventListener('click', () => {
    nextSlide();
})

leftButton.addEventListener('click', () => {
    previousSlide();
})

function nextSlide() {
    cards[i].classList.add('hidden');
    i = (i+1) % cards.length;
    cards[i].classList.remove('hidden');
}

function previousSlide() {
    cards[i].classList.add('hidden');
    i = (i - 1 + cards.length) % cards.length;
    console.log(i)
    cards[i].classList.remove('hidden');
}

console.log(cards)