var http = require ('http');
var app = require('./config/express');
require('./config/database')('localhost/manutdasa');


module.exports = http.createServer(app).listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
	console.log('Servidor Iniciado');
});
