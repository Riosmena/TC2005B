const db = require('../util/database');

/*const modelos = [
    {
        tipo: 'Wrangler',
        version: 'Rubicon',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiPaDfhhNMhMpFAm7cOrO4_zvGKSkGiuFkBg&usqp=CAU',
        color: 'Rojo'
    },
    {
        tipo: 'Wrangler Unlimited',
        version: 'Sahara',
        imagen: 'https://w0.peakpx.com/wallpaper/889/993/HD-wallpaper-jeep-jeep-wrangler-unlimited-sahara-black-car-car-off-road.jpg',
        color: 'Negro'
    },
    {
        tipo: 'Wrangler',
        version: 'Rubicon',
        imagen: 'https://pictures.dealer.com/c/ccivancouver/0670/c2788e3500110319b23696386786a7ddx.jpg?impolicy=resize&w=414',
        color: 'Gris'
    },
    {
        tipo: 'Wrangler Unlimited',
        version: 'Rubicon',
        imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jeep-wrangler-4xe-2022-1638881858.jpg?crop=1.00xw:0.892xh;0,0.0462xh&resize=1200:*',
        color: 'Blanco'
    }
];*/

module.exports = class Jeep {
    constructor(nuevo_Jeep) {
        this.tipo = nuevo_Jeep.tipo || '';
        this.version = nuevo_Jeep.version || '';
        this.imagen = nuevo_Jeep.imagen || 'jeep.jpg';
        this.color = nuevo_Jeep.color || '';
    }

    save() {
        return db.execute(`
        INSERT INTO autos (tipo, imagen, color, idVersion) 
        values (?, ?, ?, ?)
    `, [this.tipo, this.imagen, this.color, this.version]);
    }

    static fetchAll() {
        return db.execute(
            `SELECT a.id, a.tipo, a.imagen, a.color, a.created_at, v.nombre as version 
            FROM autos a, versiones v
            WHERE a.idVersion = v.id
            `
        );
    }

    static fetchOne(id) {
        return db.execute(
            `SELECT a.id, a.tipo, a.imagen, a.color, a.created_at, v.nombre as version 
            FROM autos a, versiones v
            WHERE a.idVersion = v.id AND a.id = ?
            `, [id]
        );
    }

    static fetch(id) {
        if (id) {
            return Jeep.fetchOne(id);
        } else {
            return Jeep.fetchAll();
        }
    }
}