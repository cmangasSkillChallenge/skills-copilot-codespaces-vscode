// crea un servidor web
// para pruebas en local
// usando la libreria express
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/comments', (req, res) => {
  res.json([
    {
      id: 0,