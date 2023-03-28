module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('crear_autos') >= 0)) {
        return response.redirect('/autos');
    }
    next();
}