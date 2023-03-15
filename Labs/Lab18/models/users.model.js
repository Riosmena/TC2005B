const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class user {
    constructor(nuevo_usuario) {
        this.nombre = nuevo_usuario.nombre || 'John Doe';
        this.username = nuevo_usuario.username || 'johndoe';
        this.password = nuevo_usuario.password || 'johndoejohndoe';
    }

    save() {
        return bcrypt.hash(this.password, 12)
        .then((password_cifrado) => {
            return db.execute(`
                INSERT INTO users (nombre, username, password)
            values (?, ?, ?)
            `, [this.nombre, this.username, password_cifrado]);
        })
        .catch((error) => {console.log(error)});
    }

    static fetchOne(username) {
        return db.execute(`
            SELECT * 
            FROM users
            WHERE username = ?
        `, [username]);
    }

    static fetchPrivilegios(username) {
        return db.execute(`
            SELECT p.nombre
            FROM users u, usuario_rol ur, roles r, rol_privilegio rp, privilegios p 
            WHERE u.id = ur.idUsuario AND ur.idRol = r.id AND rp.idRol = r.id 
                AND rp.idPrivilegio = p.id AND u.username = ?
        `, [username]);
    }
}