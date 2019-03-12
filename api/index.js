const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const cafes = require('./db');

app.use(cors());

// Routes
app.get('/', (req, res) => res.json(cafes));

// Server
app.listen(port, () => console.log(`Escuchando en el puerto ${port} http://localhost:${port} ...`));
