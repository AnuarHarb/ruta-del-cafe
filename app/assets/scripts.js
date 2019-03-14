const lista = document.querySelector('.list');
const coffeeMap = document.querySelector('.coffee-map');
const cafesApi = 'http://localhost:3000';

function callApi(apiUrl) {
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      printList(resp.restaurantes);
      ordenarPorNombre(resp.restaurantes);
      ordenarPorRating(resp.restaurantes);
    });
}

function printList(cafes /*lista de cafes */) {
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


function ordenarPorNombre(listaRestaurantes) {
  let ordenNombre = listaRestaurantes.sort(function(a,b) {
    if(a.nombre < b.nombre) {
      return -1
    } else if(a.nombre == b.nombre){
      return 0
    } else {
      return 1
    }
  });
  console.log(ordenNombre);
  printList(ordenNombre);
}

function ordenarPorRating(listaRestaurantes) {
  let ordenEdad = listaRestaurantes.sort(function(a,b) {
    if(a.rating > b.rating) {
      return -1
    } else {
      return 1
    }
  });
  console.log('Edad', ordenEdad);
}


// function newCafe() {
//   const newCafeInfo = {
//     nombre: "Nuevo Cafe",
//     direccion: "Av. Cafe nuevo, 06100 Ciudad de México, CDMX",
//     lat: 19.1120701,
//     lng: -99.3754439,
//     rating: 2
//   }
//   const fetchSettings = {
//     method: 'POST',
//     body: JSON.stringify(newCafeInfo),
//     headers: {
//       'Content-Type': 'application/json'
//     },
//
//   }
//   console.log(fetchSettings);
//   fetch(cafesApi, fetchSettings)
//     .then(resp => {
//       callApi(cafesApi);
//       console.log(resp);
//       return resp.json();
//     }).then( resp => console.log(resp))
// }














//
