const openBtn = document.querySelector('button');
const popup = document.querySelector('.popup');
const main = document.querySelector(".main");

document.addEventListener('click', (e) => {
if(event.target.matches('button')){
popup.classList.add('opened')
}
if(popup.classList.contains('opened')){
if(event.target.closest('.popup')){
    popup.classList.remove('opened');
}
}
})