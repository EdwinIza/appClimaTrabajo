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


const getInfo = async(ciudad) => {
    try {
        const coords = await ubicacion.getCiudadLatLon(ciudad);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return temp;
    } catch (e) {
        return `No se pudo determinar el clima de ${ ciudad }`;
    }
}

quito = getInfo('Quito')
        .then(console.log)
        .catch(console.log) 



app.get('/', function(req, res) {
    res.render('home', {

    });
});

app.get('/mundo', (req, res) => {
    res.render('mundo');
});

app.listen(port, () => {

    console.log(`Escuchando peticiones en el puerto ${port}`);
});