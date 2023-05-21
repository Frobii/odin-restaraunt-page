export default function loadMenu() {
  const selectedTile = document.querySelector('.selected-tile');
  selectedTile.removeChild(selectedTile.lastChild);

  const menu = document.createElement('div');
  menu.setAttribute('class', 'menu');

  const menuItem1 = document.createElement('div');
  menuItem1.setAttribute('class', 'menuItem');
  const menuImg1 = document.createElement('img');
  menuImg1.setAttribute('class', 'menuImg1');
  const menuTitle1 = document.createElement('div');
  menuTitle1.setAttribute('class', 'menuTitle');
  menuTitle1.textContent = 'Pastina Soup';

  const menuItem2 = document.createElement('div');
  menuItem2.setAttribute('class', 'menuItem');
  const menuImg2 = document.createElement('img');
  menuImg2.setAttribute('class', 'menuImg2');
  const menuTitle2 = document.createElement('div');
  menuTitle2.setAttribute('class', 'menuTitle');
  menuTitle2.textContent = 'Minestrone Soup';

  const menuItem3 = document.createElement('div');
  menuItem3.setAttribute('class', 'menuItem');
  const menuImg3 = document.createElement('img');
  menuImg3.setAttribute('class', 'menuImg3');
  const menuTitle3 = document.createElement('div');
  menuTitle3.setAttribute('class', 'menuTitle');
  menuTitle3.textContent = 'Spaghetti';

  const menuItem4 = document.createElement('div');
  menuItem4.setAttribute('class', 'menuItem');
  const menuImg4 = document.createElement('img');
  menuImg4.setAttribute('class', 'menuImg4');
  const menuTitle4 = document.createElement('div');
  menuTitle4.setAttribute('class', 'menuTitle');
  menuTitle4.textContent = 'Ravioli';

  const menuItem5 = document.createElement('div');
  menuItem5.setAttribute('class', 'menuItem');
  const menuImg5 = document.createElement('img');
  menuImg5.setAttribute('class', 'menuImg5');
  const menuTitle5 = document.createElement('div');
  menuTitle5.setAttribute('class', 'menuTitle');
  menuTitle5.textContent = 'Cured Meat Pizza';

  const menuItem6 = document.createElement('div');
  menuItem6.setAttribute('class', 'menuItem');
  const menuImg6 = document.createElement('img');
  menuImg6.setAttribute('class', 'menuImg6');
  const menuTitle6 = document.createElement('div');
  menuTitle6.setAttribute('class', 'menuTitle');
  menuTitle6.textContent = 'Vegetable Pizza';

  const menuItem7 = document.createElement('div');
  menuItem7.setAttribute('class', 'menuItem');
  const menuImg7 = document.createElement('img');
  menuImg7.setAttribute('class', 'menuImg7');
  const menuTitle7 = document.createElement('div');
  menuTitle7.setAttribute('class', 'menuTitle');
  menuTitle7.textContent = 'Cinnamon Donuts';

  const menuItem8 = document.createElement('div');
  menuItem8.setAttribute('class', 'menuItem');
  const menuImg8 = document.createElement('img');
  menuImg8.setAttribute('class', 'menuImg8');
  const menuTitle8 = document.createElement('div');
  menuTitle8.setAttribute('class', 'menuTitle');
  menuTitle8.textContent = 'Tiramisu';

  selectedTile.appendChild(menu);

  menu.appendChild(menuItem1);
  menuItem1.appendChild(menuImg1);
  menuItem1.appendChild(menuTitle1);

  menu.appendChild(menuItem2);
  menuItem2.appendChild(menuImg2);
  menuItem2.appendChild(menuTitle2);

  menu.appendChild(menuItem3);
  menuItem3.appendChild(menuImg3);
  menuItem3.appendChild(menuTitle3);

  menu.appendChild(menuItem4);
  menuItem4.appendChild(menuImg4);
  menuItem4.appendChild(menuTitle4);

  menu.appendChild(menuItem5);
  menuItem5.appendChild(menuImg5);
  menuItem5.appendChild(menuTitle5);

  menu.appendChild(menuItem6);
  menuItem6.appendChild(menuImg6);
  menuItem6.appendChild(menuTitle6);

  menu.appendChild(menuItem7);
  menuItem7.appendChild(menuImg7);
  menuItem7.appendChild(menuTitle7);

  menu.appendChild(menuItem8);
  menuItem8.appendChild(menuImg8);
  menuItem8.appendChild(menuTitle8);
}
