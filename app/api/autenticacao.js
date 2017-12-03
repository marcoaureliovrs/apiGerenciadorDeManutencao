module.exports = function (app) {
	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');
	var api = {};
	var model;

	 
	api.autentica = function (req, res) {
		
		if (req.body.type == "Company") {
			model = mongoose.model('Company');
		} else {
			model = mongoose.model('User');
		}
		console.log(req.body.email);
		console.log(req.body.passwd);

		model
			.findOne({email: req.body.email})
			.select('permision email _id passwd')
			.then(function(user) {
				if (!user) {
					console.log('Email inexistente');
					console.log(user);
					res.sendStatus(401);
				} else {
					console.log(user);
					user.comparePassword(req.body.passwd, function(err, isMatch){
						if(!err) {
							console.log("senha ok!")
							console.log(isMatch);
							var token = jwt.sign({email: user.email, permision: user.permision, _id: user._id}, app.get('secret'), {
								expiresIn:84500
							});
							console.log('token criado e sendo enviado no header de resposta');
							res.set('x-access-token', token);
							res.end();
						} else {
							console.log('Senha inválida:');
							console.log(err);
							console.log(isMatch);
							return res.sendStatus(401);
						}
					})
				}
			}, function(error) {
				console.log('Dados invalidos');
				console.log(error);
				return res.sendStatus(401);
			});
	};
	
	api.verificaToken = function (req, res, next) {
		
		var token = req.headers['x-access-token'];
		if (token) {
			console.log('Verificando o token...');
			jwt.verify(token, app.get('secret'), function(err, decoded) {
				if(err) {
					console.log('Token rejeitado');
					return res.sendStatus(401);
				}
				req.usuario = decoded;
				next();	
			});
		} else {
			console.log('Token não enviado');
			return res.sendStatus(401);
		}
	};

	return api;
};