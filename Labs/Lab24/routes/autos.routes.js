const express = require('express');

const router = express.Router();

const hasCreate = require('../util/has-create');

const autosController = require('../controllers/autos.controller');

router.get('/buscar/:valor_busqueda', autosController.get_buscar);

router.get('/configurar', hasCreate, autosController.get_configuracion);

router.post('/configurar', hasCreate, autosController.post_configuracion);

router.get('/:id', autosController.tuJeep);

router.get('/', autosController.tuJeep);

module.exports = router;