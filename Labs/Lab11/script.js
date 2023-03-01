const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log("Middleware");
    next();
});

app.use("/primero", (request, response, next) => {
    response.send("¿Quiéres obtener un auto o una camioneta, elige una de las opciones de antes y obten tu premio");
});

app.use("/segundo", (request, response, next) => {
    response.send("Esta página fue hecha por: José Emiliano Riosmena Castañón - A01704245");
});

app.use("/tercero", (request, response, next) => {
    let html = `
        <h1>Preguntas:</h1>
        <h5>Describe el archivo package.json</h5>
        <p>El archivo 'package.json', el cual contiene metadatos descriptivos y funcionales sobre un proyecto
            y proporciona al administrador de paquetes npm información para ayudar a indentificar 
            y manejar el proyecto junto con su dependencias añadidas.</p>
    `;
    response.send(html);
});

const autoRuta = require("./routes/autos.routes");

app.use("/autos", autoRuta);

const camionetaRuta = require("./routes/camionetas.routes");

app.use("/camionetas", camionetaRuta);

app.use((request, response, next) => {
    console.log("Middleware Final");
    response.status(404);
    let html = `
        <h1>Autos y camionetas</h1>
        <p>Hola, si estas viendo esto, es porque o estas aqui por primera vez o introdujiste mal una ruta</p>
        <p>Las rutas que puedes tomar son las siguientes:</p>
        <a href="/primero">Primero</a><br>
        <a href="/segundo">Segundo</a><br>
        <a href="/autos/elegir">Autos</a><br>
        <a href="/camionetas/elegir">Camionetas</a><br>
        <a href="/tercero">Preguntas</a>
    `;
    response.send(html);
});

app.listen(3000);