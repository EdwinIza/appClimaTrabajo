const express = require('express');
const app = express();

const axios = require('axios');

const ubicacion = require('./controlador/ubicacion');
const clima = require('./controlador/clima');


const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
            });
});

app.get('/mundo', (req, res) => {
    res.render('mundo', {
    });
});

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
});