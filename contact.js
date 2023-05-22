export default function loadContact() {
  const selectedTile = document.querySelector('.selected-tile');

  if (selectedTile.hasChildNodes()) {
    selectedTile.removeChild(selectedTile.lastChild);
  }

  const contact = document.createElement('div');
  contact.setAttribute('class', 'contact');

  const contactDetails = document.createElement('div');
  contactDetails.setAttribute('class', 'contact-details');
  const phoneIcon = document.createElement('div');
  phoneIcon.setAttribute('class', 'contact-icon');
  const phoneNumber = document.createElement('div');
  phoneNumber.setAttribute('class', 'phone-number');
  phoneNumber.textContent = 'Reservations: 434 - 343 - 3423';

  const locationDetails = document.createElement('div');
  locationDetails.setAttribute('class', 'location-details');
  const locationIcon = document.createElement('div');
  locationIcon.setAttribute('class', 'location-icon');
  const address = document.createElement('div');
  address.setAttribute('class', 'address');
  address.textContent = '5670 2nd St, Long Beach, CA 90803, USA';

  const locationOnMap = document.createElement('div');
  locationOnMap.setAttribute('class', 'map');

  selectedTile.appendChild(contact);

  contact.appendChild(contactDetails);
  contactDetails.appendChild(phoneIcon);
  contactDetails.appendChild(phoneNumber);

  contact.appendChild(locationDetails);
  locationDetails.appendChild(locationIcon);
  locationDetails.appendChild(address);

  contact.appendChild(locationOnMap);
}
