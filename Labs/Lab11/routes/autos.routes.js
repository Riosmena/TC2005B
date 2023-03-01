const express = require('express');
const file = require('fs');

const router = express.Router();

router.get('/elegir', (request, response, next) => {
    
    let html = `
        <form action="/autos/elegir" method="POST">
        <fieldset><legend>Elige una opción: </legend>
        <div><input type="radio" id="jetta" name="tu_auto" value="Volkswagen Jetta 2023" checked>
        <label for="jetta">A</label></div>
        <div><input type="radio" id="sentra" name="tu_auto" value="Nissan Sentra 2023" checked>
        <label for="sentra">B</label></div>
        <div><input type="radio" id="aveo" name="tu_auto" value="Chevrolet Aveo 2023" checked>
        <label for="aveo">C</label></div>
        <div><input type="radio" id="rio" name="tu_auto" value="Kia Rio 2023" checked>
        <label for="rio">D</label></div>
        <input type="submit" value="Revelar"></fieldset>
        </form>
    `;

    response.send(html);
});

router.post('/elegir', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.tu_auto);
    file.writeFileSync('file.txt', request.body.tu_auto);
    response.send("Obtuviste un: " + request.body.tu_auto);
});

module.exports = router;