//Botton para crear nuevo cafe
const nuevoCafeBoton = document.getElementById('nuevo-cafe-boton');
// Inputs del from
const cafeNombreInput = document.getElementById('nombre');
const cafeRatingInput = document.getElementById('rating');

nuevoCafeBoton.addEventListener('click', function() {
  // Se guarda el valor de los inputs en variables que podremos usar después
  const nombreCafe = cafeNombreInput.value;
  const ratingCafe = cafeRatingInput.value;
  // Se limpian los inputs
  cafeNombreInput.value = '';
  cafeRatingInput.value = '';
  //Creamos un objeto de "Cafe" con los valores del formulario
  const newCafe = {
    nombre: nombreCafe,
    rating: ratingCafe
  }
  createNewCafe(newCafe); // Mandamos a llamar la función que hace un fetch con el metodo put a la API pasandole como parámetro el nuevo cafe.
})

// Función para crear un cafe nuevo en la api, recibe como parametro el objeto con los datos del nuevo cafe
function createNewCafe(newCafe) {

  // Settings para la petición
  const fetchSettings = {
    method:'post', // Inidcamos que añadiremos algo nuevo a la api
    body: JSON.stringify(newCafe), // Datos que usara la api para crear el nuevo elemento
    headers: {
      'Content-Type': 'application/json'
    },
  }

  // Fetch recibe 2 parametros, una url(cafesApi) y un objeto de configuración (fetchSettings)
  fetch(cafesApi, fetchSettings)
    .then(resp => console.log(resp))
    .then(resp => {
      callApi(cafesApi);
    })
    .catch(err => console.log(err))
}
