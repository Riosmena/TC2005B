console.log("Hello, World!");
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

server.listen(3000);