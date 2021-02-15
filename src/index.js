/* eslint-disable no-unused-vars */
import './styles.scss';
import Trip from './assets/images/trip.jpg';
import Background from './assets/images/project.png';

const bugerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

bugerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});