const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./util/is_auth');

const app = express();

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
const csrfProtection = csrf();

app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use((request, response, next) => {
    console.log("El middleware ha funcionado");
    next();
});

const autosRutas = require('./routes/autos.routes');

app.use('/autos', isAuth, autosRutas);

const rutasUsers = require('./routes/users.routes');

app.use('/users', rutasUsers);

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