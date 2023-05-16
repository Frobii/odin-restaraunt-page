import loadHome from './home';

const content = document.getElementById('content');

function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('class', 'header');

  const restarauntName = document.createElement('h1');
  restarauntName.setAttribute('class', 'restaurant-name');
  restarauntName.innerHTML = "Antonina's";

  const navigation = document.createElement('div');
  navigation.setAttribute('class', 'navigation');

  content.appendChild(header);
  header.appendChild(restarauntName);
  header.appendChild(navigation);
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
  loadHome(createMain());
  createFooter();
}
