const lista = document.querySelector('.list');
const sortButtons = document.querySelectorAll('.sort-button');
const cafesApi = 'http://localhost:3000';

function callApi(apiUrl) {
  fetch(apiUrl)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      printList(resp.restaurantes);
      activateButtons(resp.restaurantes);
    });
}

function activateButtons(cafes) {
  for(let button of sortButtons) {
    button.addEventListener('click', function(event) {
      const sortValue = event.target.getAttribute('data-sort');
      if(sortValue == 'alpha') {
        alphabeticalSort(cafes);
      } else {
        ratingSort(cafes)
      }
    })
  }
}

function alphabeticalSort(cafes) {
  cafes.sort(function(a, b){
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
  });
  printList(cafes);
  console.log('alphabético', cafes);
}

function ratingSort(cafes) {
  cafes.sort(function(a, b){
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
  });
  printList(cafes);
  console.log('rating', cafes);
}

function printList(cafes) {
  lista.innerHTML = '';
  for(let cafe of cafes) {
    lista.innerHTML += `
      <li>${cafe.nombre} - ${cafe.rating}</li>
    `
  }
}

callApi(cafesApi);
