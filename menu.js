export default function loadMenu() {
  const selectedTile = document.querySelector('.selected-tile');
  selectedTile.removeChild(selectedTile.lastChild);

  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');

  const menuItem1 = document.createElement('div');
  menuItem1.setAttribute('class', 'menuItem');

  const menuItem2 = document.createElement('div');
  menuItem2.setAttribute('class', 'menuItem');

  const menuItem3 = document.createElement('div');
  menuItem3.setAttribute('class', 'menuItem');

  const menuItem4 = document.createElement('div');
  menuItem4.setAttribute('class', 'menuItem');

  const menuItem5 = document.createElement('div');
  menuItem5.setAttribute('class', 'menuItem');

  const menuItem6 = document.createElement('div');
  menuItem6.setAttribute('class', 'menuItem');

  const menuItem7 = document.createElement('div');
  menuItem7.setAttribute('class', 'menuItem');

  const menuItem8 = document.createElement('div');
  menuItem8.setAttribute('class', 'menuItem');

  selectedTile.appendChild(menu);
  menu.appendChild(menuItem1);
  menu.appendChild(menuItem2);
  menu.appendChild(menuItem3);
  menu.appendChild(menuItem4);
  menu.appendChild(menuItem5);
  menu.appendChild(menuItem6);
  menu.appendChild(menuItem7);
  menu.appendChild(menuItem8);
}
