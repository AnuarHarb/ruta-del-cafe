const lista = document.querySelector('.list');
const coffeeMap = document.querySelector('.coffee-map');
const cafesApi = 'http://localhost:3000';

function callApi(apiUrl) {
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      printList(resp.restaurantes);
    });
}

function printList(cafes) {
  lista.innerHTML = '';
  for(let cafe of cafes) {
    lista.innerHTML += `
      <li>${cafe.nombre} - ${cafe.rating}</li>
    `
    let marker = new google.maps.Marker({
      position: { lat: cafe.lat, lng:cafe.lng },
      map: condesaMap,
      name: cafe.name
    });
  }
}

let condesaMap;
let condesa = { lat: 19.4153363 , lng:-99.1733391 }

function initMap() {
  condesaMap = new google.maps.Map(coffeeMap, {
    center: condesa, zoom: 16
  });
  callApi(cafesApi);
}











//
