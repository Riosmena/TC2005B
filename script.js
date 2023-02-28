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
    //response.send('¡Hola mundo!'); //Manda la respuesta
    next();
});

app.use('/hola', (request, response, next) => {
    response.send("Hola desde esta nueva ruta");
});

app.use('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.jugador);
    
    let html = `
        <form action="nuevo" method="POST">
        <label for="jugador">Nombre del jugador:</label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
})

app.use((request, response, next) => {
    console.log("Tercer Middleware");
    response.send("Hola desde el tercer middleware");
});

app.listen(3000);