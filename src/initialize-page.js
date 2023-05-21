import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.getElementById('content');

function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  const restarauntName = document.createElement('h1');
  restarauntName.setAttribute('class', 'restaurant-name');
  restarauntName.innerHTML = "Antonina's";

  const navigation = document.createElement('div');
  navigation.setAttribute('class', 'navigation');

  const homeButton = document.createElement('div');
  homeButton.setAttribute('class', 'nav-button');
  homeButton.classList.add('active');
  homeButton.innerHTML = 'Home';
  homeButton.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('.active');

    elements.forEach((element) => {
      element.classList.remove('active');
    });

    e.target.classList.add('active');

    loadHome();
  });

  const menuButton = document.createElement('div');
  menuButton.setAttribute('class', 'nav-button');
  menuButton.innerHTML = 'Menu';
  menuButton.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('.active');

    elements.forEach((element) => {
      element.classList.remove('active');
    });

    e.target.classList.add('active');

    loadMenu();
  });

  const contactButton = document.createElement('div');
  contactButton.setAttribute('class', 'nav-button');
  contactButton.innerHTML = 'Contact';
  contactButton.addEventListener('click', (e) => {
    const elements = document.querySelectorAll('.active');

    elements.forEach((element) => {
      element.classList.remove('active');
    });

    e.target.classList.add('active');

    loadContact();
  });

  content.appendChild(header);
  header.appendChild(restarauntName);
  header.appendChild(navigation);
  navigation.appendChild(homeButton);
  navigation.appendChild(menuButton);
  navigation.appendChild(contactButton);
}

function createMain() {
  const main = document.createElement('div');
  main.setAttribute('class', 'main');

  const selectedTile = document.createElement('div');
  selectedTile.setAttribute('class', 'selected-tile');

  content.appendChild(main);
  main.appendChild(selectedTile);

  return selectedTile;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');
  footer.innerHTML = 'The Odin Project 2023 Frobi';

  content.appendChild(footer);
}

export default function initializePage() {
  createHeader();
  createMain();
  createFooter();
  loadHome();
}
