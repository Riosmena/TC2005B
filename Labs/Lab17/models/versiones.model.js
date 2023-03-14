const db = require('../util/database');

module.exports = class Version {

    constructor() {

    }

    save() {

    }

    static fetchAll() {
        return db.execute(`
            SELECT id, nombre
            FROM versiones
        `);
    }
}