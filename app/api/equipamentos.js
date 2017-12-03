
var mongoose = require('mongoose');
var model = mongoose.model('Equipamento');
var api = {};

//Método responsável por listar os equipamentos na base de dados
api.listarEquipamentos = function(req, res) {
    model
    .find()
    .select()
    .then(function(equipamentos) {
        console.log(equipamentos);
                res.status(200).json(equipamentos); 
        
    }, function(error) {
        console.log(error);
        res.status(500).json(error);

    });
}

//Método responsável por consultar o equipamento na base de dados
api.detalhesEquipamento = function(req, res) {
    let id = req.params.id;
    model
    .findOne({"codequipamento": id})
    .select()
    .then(function(equipamento) {
        console.log(equipamento);
        res.status(200).json(equipamento);

    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

//Método responsável por cadastrar o equipamento na base de dados
api.cadastroEquipamento = function(req, res) {
    let equipamento = req.body;
    model
        .create(equipamento)
        .then(function(equipamento) {
            console.log(equipamento);
            res.status(200).json(equipamento);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por atualizar o equipamento na base de dados
api.atualizarEquipamento = function(req, res) {
    let equipamento = req.body;
    model
        .findByIdAndUpdate(req.params.id, equipamento)
        .then(function(equipamento) {
            console.log(equipamento);
            res.status(200).json(equipamento);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por deletar o equipamento na base de dados
api.deletarEquipamento = function(req, res) {
    let id = req.params.id;
    model
    .remove({"codEquipamento": id})
    .then(function() {
        res.sendStatus(204);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

module.exports = api