const http = require("http");
require('dotenv').config();
const puerto = process.env.PORT || 50095;

console.log("Hola :C");

const server = http.createServer((req, res) => {
    console.log("request recibido");
     res.setHeader('Content-Type', 'text/html; charset=UTF-8');
            let saludo= '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Saludo</title><style>body{font-family:Arial,sans-serif;background:#f0f8ff;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.saludo{background:#4caf50;color:#fff;padding:30px 50px;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.2);font-size:2rem}</style></head><body><div class="saludo">¡Hola! Bienvenido/a a mi página.</div></body></html>'
            let inicio='<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Inicio</title><style>body{font-family:Arial,sans-serif;background:#e0f7fa;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.contenido{font-size:2rem;color:#00796b}</style></head><body><div class="contenido">¡Bienvenido a la página de Inicio!</div></body></html>'
            let contacto='<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Contacto</title><style>body{font-family:Arial,sans-serif;background:#fff3e0;display:flex;justify-content:center;align-items:center;height:100vh;margin:0}.contacto{font-size:2rem;color:#ef6c00}</style></head><body><div class="contacto">Contáctanos en contacto@ejemplo.com</div></body></html>'

            if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end("hola mundo cruel");
  } else if (req.url === '/inicio') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(inicio);
  } else if (req.url === '/contacto') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(contacto);
  } else  if (req.url === '/saludo') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end(saludo);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.end('<h1>404 - Página no encontrada</h1>');
  }
});


server.listen(puerto, () => {
    console.log(`servidor escuchando en el puerto ${puerto}`);
    console.log(`http://localhost:${puerto}`);
});

/*
server.listen(0, () => {
    console.log(`servidor escuchado en puerto aleatorio libre ${server.address().port}`);
     console.log(`http://localhost:${server.address().port}`);
});*/