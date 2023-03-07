const modelos = [
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
];

module.exports = class Jeep {
    constructor(nuevo_Jeep) {
        this.tipo = nuevo_Jeep.tipo || '';
        this.version = nuevo_Jeep.version || '';
        this.imagen = nuevo_Jeep.imagen || 'https://bulma.io/images/placeholders/1280x960.png';
        this.color = nuevo_Jeep.color || '';
    }

    save() {
        modelos.push(this);
    }

    static fetchAll() {
        return modelos;
    }
}