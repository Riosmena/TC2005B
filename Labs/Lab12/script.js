const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log("Un middleware");
    next();
});

const autosRutas = require('./routes/autos.routes');

app.use('/autos', autosRutas);

app.use((request, response, next) => {
    console.log("Middleware final");
    response.status(404);
    response.send('Esta página no se encuentra, por favor, intente escribir "/autos"');
});

app.listen(3000);