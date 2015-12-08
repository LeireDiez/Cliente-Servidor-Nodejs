#!/usr/bin/env node
var https = require('http');

var nombre = process.argv[2];

var options = {
	host : 'localhost',
	port : 8080,
	path: '/agenda/'+nombre,
	method: 'GET',
	headers: {'User-Agent': 'Prueba-Node-App'}
};
var req = https.get(options, function(res) {
	res.setEncoding('utf8');
	res.on('data', function (datos_JSON) {
		var datos=JSON.parse(datos_JSON);
		console.log('Nombre: ' + datos.nombre+ "\nTelefono: " + datos.telefono + "\n");
	});
});
req.end();

