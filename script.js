/*console.log("Hello, World!");
console.error("This is an error");

const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', "Hello, World!");

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 200, 340, 1000, 50];
for (let i of arreglo) {
    setTimeout(() => {console.log(i)}, i);
}

console.log("Este log esta antes pero despues de imprimir el arreglo");
setTimeout(() => {console.log("Ya te hackie")}, 12000);

const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Amogus</h1>");
    response.write("ඞඞඞඞඞඞඞඞඞ")
    response.end();
});

server.listen(3000);*/

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);