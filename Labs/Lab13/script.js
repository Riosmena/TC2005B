const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((request, response, next) => {
    console.log("El middleware ha funcionado");
    next();
});

/*const autosRutas = require('./routes/autos.routes');

app.use('/autos', autosRutas);*/

app.use((request, response, next) => {
    console.log("El middleware final sí esta funcionando");
    response.status(404);
    let html = `
    <h1>404 - Not found</h1>
    <p>Esta página no se encuentra, por favor intente escribir "localhost:3000/autos"</p>
    `
    response.send(html);
});

app.listen(3000);