const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);

    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<h1>Autos</h1>');
        response.write('<a href="/elegir">Elegir un auto</a>');
        response.end();
    }

    else if (request.url === "/elegir" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<h1>Autos</h1>');
        response.write('<form action="/elegir" method="POST">');

        let options = '<fieldset><legend>Elige uno de los siguientes:</legend>';
        options += '<div><input type="radio" id="jetta" name="tu_auto" value="jetta" checked>'
        options += '<label for="jetta">A</label></div>'
        options += '<div><input type="radio" id="xtrail" name="tu_auto" value="xtrail">'
        options += '<label for="jetta">B</label></div>'
        options += '<div><input type="radio" id="jeep" name="tu_auto" value="jeep">'
        options += '<label for="jetta">C</label></div>'
        options += '<div><input type="radio" id="rio" name="tu_auto" value="rio">'
        options += '<label for="jetta">D</label></div>'

        response.write(options);
        response.write('<input type="submit" value="Revelar"></fieldset>');
        response.write('</form>');
        response.write('</body></html>');
        response.end();
    }

    else if (request.url === "/elegir" && request.method === "POST") {
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datosCompletos = Buffer.concat(datos).toString();
            console.log(datosCompletos);
            const tu_auto = datosCompletos.split('&')[0].split('=')[1];
            console.log(tu_auto);
            if (tu_auto === "jetta") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<head><meta charset="utf-8"></head><body>');
                response.write('<h1>Has ganado un:</h1>');
                response.write('Volkswagen Jetta 2023');
                response.write('<img alt="Volkswagen Jetta 2023" src="https://img.remediosdigitales.com/f8e25b/volkswagen-jetta-2022-precio-mexico_/1366_2000.jpg" width=500>');
                return response.end();
            }

            else if (tu_auto === "xtrail") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<head><meta charset="utf-8"></head><body>');
                response.write('<h1>Has ganado un:</h1>');
                response.write('Nissan X-Trail 2017');
                response.write('<img alt="Nissan X-Trail 2017" src="https://www.autosactual.mx/wp-content/uploads/2017/01/nissan-xtrail-2017-mexico.jpg" width=500>');
                return response.end();
            }

            else if (tu_auto === "jeep") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<head><meta charset="utf-8"></head><body>');
                response.write('<h1>Has ganado un:</h1>');
                response.write('Jeep Wrangler 2014');
                response.write('<img alt="Jeep Wrangler 2014" src="https://i.pinimg.com/originals/fb/00/50/fb0050b9bd9eb0e31f39ce8b2ce143b3.jpg" width="500">');
                return response.end();
            }

            else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
                response.write('<head><meta charset="utf-8"></head><body>');
                response.write('<h1>Has ganado un:</h1>');
                response.write('Kia Rio 2022');
                response.write('<img alt="Kia Rio 2022" src="https://blog.segundamano.mx/wp-content/uploads/2022/02/3-48-1024x602.jpg" width=500>');
                return response.end();
            }
        });
    }

    else {
        response.statusCode = 404;
        response.write("Lo sentimos, no tenemos ese auto");
        response.end();
    }
});

server.listen(3000);