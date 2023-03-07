const Jeep = require('../models/autos.model');

exports.get_configuracion = (request, response, next) => {
    response.render('configurar');
};

exports.post_configuracion = (request, response, next) => {

    const auto = new Jeep({
        tipo: request.body.tipo,
        version: request.body.version,
        color: request.body.color,
    });

    auto.save();

    response.redirect('/autos');
};

exports.tuJeep = (request, response, next) => {
    response.render('lista', { versiones: Jeep.fetchAll() });
}