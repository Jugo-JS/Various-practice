const openButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.cancel-button');
const nav = document.querySelector('nav');
const page = document.querySelector('.page');

const toggle = () => {
    nav.classList.toggle('nav-is-open');
    page.classList.toggle('container-all');
    openButton.classList.toggle('display-none');
    closeButton.classList.toggle('display');
    closeButton.classList.toggle('cancel-fix');
}

openButton.addEventListener('click', toggle);

closeButton.addEventListener('click', toggle);