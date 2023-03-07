const express = require('express');

const router = express.Router();

const autosController = require('../controllers/autos.controller');

router.get('/configurar', autosController.get_configuracion);

router.post('/configurar', autosController.post_configuracion);

router.get('/', autosController.tuJeep);

module.exports = router;