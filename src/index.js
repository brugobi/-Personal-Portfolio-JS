import './styles.scss';

const bugerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

bugerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

