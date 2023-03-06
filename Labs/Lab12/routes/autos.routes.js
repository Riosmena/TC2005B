const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        titulo: 'Compra un Jeep Wrangler',
    });
});

router.get('/preguntas', (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
    });
});

router.get('/configurar', (request, response, next) => {
    response.render('configurar', {
        titulo: 'Configura tu Jeep',
    });
});

router.post('/configurar', (request, response, next) => {
    response.render('confirmacion', {
        titulo: 'Tu Jeep Wrangler',
        estado: request.body.estado,
        version: request.body.version,
        color: request.body.color,
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        telefono: request.body.telefono,
        correo: request.body.correo,
        cotizacion: request.body.cotizacion
    });
});

module.exports = router;