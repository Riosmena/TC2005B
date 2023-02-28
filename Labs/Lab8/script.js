const file = require('fs');
// Ejercicio 1---------------
function promedio(arr) {
    let prom = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    prom = sum / arr.length;
    return prom;
}

let arr = [10, 18, 13, 34, 90, 45, 10, 73, 89];
let answer = promedio(arr);
console.log("Promedio:", answer);

// Ejercicio 2------------
function stringWrite(string) {
    file.writeFileSync('file.txt', string);
}

let string = ("Mi nombre es José Riosmena");
stringWrite(string);
console.log("Archivo creado correctamente :)");

// Ejercicio 3------------
function area(b, h) {
   return (b * h) / 2;
}

let b = 12;
let h = 41;
let a = area (b, h);
console.log("El área del triángulo es de:", a);

// ejercicio 4
const http = require('http');
file.readFile("../Lab6/index.html", function (err, html) {
    if (err) {
        throw err;
    }
    const server = http.createServer((request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    })
    server.listen(3000);
});