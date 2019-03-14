const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const cafes = require('./db');

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.json(cafes));

app.post('/', (req, res) => {
  const nuevoCafe = req.body; // Guardamos lo que nos mandó la petición (Los datos dle nuevo cafe)
  cafes.restaurantes.push(nuevoCafe); //Hacemos un push a nuestra lista de cafes
  res.status(201).send(nuevoCafe); // Regresamos un status para avisarle al front que todo salió bien
});




// Server
app.listen(port, () => console.log(`Escuchando en el puerto ${port} http://localhost:${port} ...`));





// app.post('/', (req, res) => {
//   const nuevoRest = req.body;
//   cafes.restaurantes.push(nuevoRest);
//   res.status(201).json(nuevoRest);
// });
