import './style.css'; // Importacion de estilos primero
import './menu.css';

import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Menu from './pages/menu.js';
import About from './pages/about.js';
import Logo from './logo.png';

document.addEventListener('DOMContentLoaded', () => {
  function loadPage(loadFunction, buttonId) {
    loadFunction();
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    document.getElementById(buttonId).classList.add('active');
  }

  loadPage(Home, 'home-btn');

  document
    .getElementById('home-btn')
    .addEventListener('click', () => loadPage(Home, 'home-btn'));
  document
    .getElementById('menu-btn')
    .addEventListener('click', () => loadPage(Menu, 'menu-btn'));
  document
    .getElementById('about-btn')
    .addEventListener('click', () => loadPage(About, 'about-btn'));
  document
    .getElementById('contact-btn')
    .addEventListener('click', () => loadPage(Contact, 'contact-btn'));

  const logoDiv = document.querySelector('.logo-img');
  const logo = document.createElement('img');
  logo.src = Logo;
  logo.alt = 'logo';
  logo.classList.add('logo');
  logoDiv.appendChild(logo);
});
