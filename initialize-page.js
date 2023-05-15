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
  const option = document.createElement('div');
  option.setAttribute('class', 'option');

  const home = document.createElement('div');
  home.setAttribute('class', 'home');

  const homePhotoContainer = document.createElement('div');
  homePhotoContainer.setAttribute('class', 'home-photo-container');
  const homePhoto = document.createElement('div');
  homePhoto.setAttribute('class', 'home-photo');
  const homeText = document.createElement('div');
  homeText.setAttribute('class', 'home-text');
  homeText.innerHTML = 'Nonna emigrated from Italy years ago, and she brought her homestyle cooking with her.<br><br> Everything in our restaurant is handmade, from the pasta to the sauces...<br><br> We use only the freshest ingredients, and we cook everything to order.';

  content.appendChild(main);
  main.appendChild(option);
  option.appendChild(home);
  home.appendChild(homePhotoContainer);
  homePhotoContainer.appendChild(homePhoto);
  home.appendChild(homeText);
}

function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('class', 'footer');
  footer.innerHTML = 'The Odin Project 2023 Frobi';

  content.appendChild(footer);
}

function initializePage() {
  createHeader();
  createMain();
  createFooter();
}

export default initializePage();
