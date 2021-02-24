/* eslint-disable no-unused-vars */
import './styles.scss';
import projects from './projects';
import Blog from './assets/images/blog.jpg';
import News from './assets/images/news_week.png';
import Shop from './assets/images/online_shop.png';
import Background from './assets/images/project.png';
import Expectrum from './assets/images/expectrum.png';
import Square from './assets/images/square.png';
import Frame from './assets/images/frame.png';
import Wales from './assets/images/wales.png';
import Weather from './assets/images/weather.png';
import Restaurant from './assets/images/restaurant.png';
import Game from './assets/images/game2.jpg';


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
  const divTools = document.querySelector('.div-tools');
  divTools.innerHTML = '';
  projects[currentItem].tool.forEach(tool => {
    const div = document.createElement('div');
    div.classList.add('tools');
    divTools.appendChild(div);
    div.textContent = tool;
  });
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