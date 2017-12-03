var mongoose = require('mongoose');
var model = mongoose.model('Laboratorio');
var api = {};

api.listarLaboratorios = function(req, res) {
    model
    .find()
    .select()
    .then(function(laboratorios) {
        console.log(laboratorios);
        res.status(200).json(laboratorios); 
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

//Método responsável por consultar o laboratorio na base de dados
api.detalhesLaboratorio = function(req, res) {
    let id = req.params.id;
    model
    .findOne({"codLaboratorio": id})
    .select()
    .then(function(laboratorio) {
        console.log(laboratorio);
        res.status(200).json(laboratorio);

    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

//Método responsável por cadastrar o laboratorio na base de dados
api.cadastrarLaboratorio = function(req, res) {
    let laboratorio = req.body;
    model
        .create(laboratorio)
        .then(function(laboratorio) {
            console.log(laboratorio);
            res.status(200).json(laboratorio);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por atualizar o laboratorio na base de dados
api.atualizarLaboratorio = function(req, res) {
    let laboratorio = req.body;
    model
        .findByIdAndUpdate(req.params.id, laboratorio)
        .then(function(laboratorio) {
            console.log(laboratorio);
            res.status(200).json(laboratorio);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por deletar o laboratorio na base de dados
api.deletarLaboratorio = function(req, res) {
    let id = req.params.id;
    model
    .remove({"codLaboratorio": id})
    .then(function() {
        res.sendStatus(204);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

module.exports = api