const Jeep = require('../models/autos.model');
const Version = require('../models/versiones.model');

exports.get_buscar = (request, response, next) => {

    Jeep.find(request.params.valor_busqueda)
    .then(([rows, fieldData]) => {
        response.status(200).json({autos: rows});
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({message: "Internal Server Rrror"});
    });    
};

exports.get_configuracion = (request, response, next) => {
    Jeep.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('configurar', {
            versiones: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
        });
    }).catch(error => console.log(error));
};

exports.post_configuracion = (request, response, next) => {

    console.log(request.file);

    const auto = new Jeep({
        tipo: request.body.tipo,
        version: request.body.version,
        color: request.body.color,
        imagen: request.file.filename,
    });

    auto.save()
    .then(([rows, fieldData]) => {
        request.session.mensaje = "El auto fue registrado exitosamente.";
        request.session.ultimo_auto = auto.tipo;
        response.redirect('/autos/');
    })
    .catch((error) => {console.log(error)});
};

exports.tuJeep = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    let mensaje = '';

    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    Jeep.fetch(request.params.id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        
        response.render('lista', { 
            versiones: rows,
            ultimo_auto: request.session.ultimo_auto || '', 
            mensaje: mensaje,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {
        console.log(err);
    });
}