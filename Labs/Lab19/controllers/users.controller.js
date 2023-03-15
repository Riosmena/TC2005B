const user = require('../models/users.model');
const bcrypt = require('bcryptjs');
exports.get_login = (request, response, next) => {
    const mensaje = request.session.mensaje || '';
    if (request.session.mensaje) {
        request.session.mensaje  = '';
    }

    response.render('login', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.post_login = (request, response, next) => {
    user.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            console.log(rows);
            bcrypt.compare(request.body.password, rows[0].password)
            .then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.nombre = rows[0].nombre;
                    user.fetchPrivilegios(rows[0].username)
                    .then(([consulta_privilegios, fieldData]) => {
                        console.log(consulta_privilegios);
                        const privilegios = [];

                        for(let privilegio of consulta_privilegios) {
                            privilegios.push(privilegio.nombre);
                        }

                        request.session.privilegios = privilegios
                        console.log(request.session.privilegios);

                        return request.session.save(err => {
                            response.redirect('/autos');
                        });
                    })
                    .catch((error) => {console.log(error)})
                }

                else {
                    request.session.mensaje = "Usuario y/o contraseña incorrectos";
                    response.redirect('/users/login');
                }
            })
            .catch((error) => console.log(error));
        }

        else {
            request.session.mensaje = "Usuario y/o contraseña incorrectos";
            response.redirect('/users/login');
        }
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.post_signup = (request, response, next) => {
    const newuser = new user({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });

    newuser.save()
    .then(([rows, fieldData]) => {
        response.redirect('/users/login');
    }).catch((error) => {console.log(error)});
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};