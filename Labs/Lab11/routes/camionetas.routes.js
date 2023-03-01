const express = require('express');
const file = require('fs');

const router = express.Router();

router.get('/elegir', (request, response, next) => {
    
    let html = `
        <form action="/autos/elegir" method="POST">
        <fieldset><legend>Elige una opción: </legend>
        <div><input type="radio" id="lobo" name="tu_auto" value="Ford Lobo 2023" checked>
        <label for="lobo">A</label></div>
        <div><input type="radio" id="wrangler" name="tu_auto" value="Jeep Wrangler 2023" checked>
        <label for="wrangler">B</label></div>
        <div><input type="radio" id="1500trx" name="tu_auto" value="Ram 1500 TRX 2023" checked>
        <label for="1500trx">C</label></div>
        <div><input type="radio" id="tucson" name="tu_auto" value="Hyundai Tucson 2023" checked>
        <label for="tucson">D</label></div>
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