import './styles.scss';
// eslint-disable-next-line no-unused-vars
import Trip from './assets/images/trip.jpg';

const bugerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

bugerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});