/* eslint-disable no-unused-vars */
import './styles.scss';
import projects from './projects';
import Trip from './assets/images/trip.jpg';
import News from './assets/images/news_week.png';
import Shop from './assets/images/online_shop.png';
import Background from './assets/images/project.png';

const bugerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

bugerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});

// projects
const title = document.getElementById('title-project');
const img = document.getElementById('project-img');
const info = document.getElementById('info');
const linkSource = document.getElementById('link-source');
const linkDemo = document.getElementById('link-demo');

let currentItem = 0;

const showPerson = () => {
  const item = projects[currentItem];
  img.src = item.img;
  title.textContent = item.title;
  info.textContent = item.text;
  linkDemo.href = item.live;
  linkSource.href = item.source;
};

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

window.addEventListener('DOMContentLoaded', () => {
  showPerson();
});

// show next person
nextBtn.addEventListener('click', () => {
  currentItem += 1;
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener('click', () => {
  currentItem -= 1;
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showPerson();
});