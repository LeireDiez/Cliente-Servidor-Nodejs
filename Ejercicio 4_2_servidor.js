//Lee fichero
var fs = require('fs');
var file = fs.readFileSync('./file.txt', 'utf8');
    
var express=require('express');
var app = express();
var contadores = new Array;
var puerto=process.argv[2]?process.argv[2]:8080;
//Carga los datos del fichero JSON
var datos=JSON.parse(file);


app.get('/agenda/:nombre', function (req, res) {
	var telefono = '';
	//Busca el teléfono del nombre		
	for (var i = 0; i < datos.length; i++) {
		if (datos[i].nombre == req.params.nombre){
			telefono = datos[i].telefono;
			break;
		}
	}
	if (telefono == ''){
		telefono = 'No existe ese nombre en la agenda';
	}
	//Envía el nombre y el teléfono
	res.send( "{ \"nombre\": \""+ req.params.nombre + "\", \"telefono\": \""+ telefono + "\"}" );
});

app.listen(puerto);
console.log('Server running at http://127.0.0.1:'+puerto+'/');

