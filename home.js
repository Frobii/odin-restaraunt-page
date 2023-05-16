export default function loadHome(selectedTile) {
  const home = document.createElement('div');
  home.setAttribute('class', 'home');
  const homePhotoContainer = document.createElement('div');
  homePhotoContainer.setAttribute('class', 'home-photo-container');
  const homePhoto = document.createElement('div');
  homePhoto.setAttribute('class', 'home-photo');
  const homeText = document.createElement('div');
  homeText.setAttribute('class', 'home-text');
  homeText.innerHTML = 'Nonna emigrated from Italy years ago, and she brought her homestyle cooking with her.<br><br> Everything in our restaurant is handmade, from the pasta to the sauces...<br><br> We use only the freshest ingredients, and we cook everything to order.';

  selectedTile.appendChild(home);
  home.appendChild(homePhotoContainer);
  homePhotoContainer.appendChild(homePhoto);
  home.appendChild(homeText);
}
