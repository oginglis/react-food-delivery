if (document.querySelector('.hamburger')) {
const hamburger = document.querySelector('.hamburger');
const open = (e) => {
  hamburger.classList.toggle('is-active')
}
hamburger.addEventListener('click', open)

}

