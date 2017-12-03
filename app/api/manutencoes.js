var mongoose = require('mongoose');
var model = mongoose.model('Manutencao');
var api = {};

api.listarManutencoes = function(req, res) {
    model
    .find()
    .select()
    .then(function(manutencoes) {
        console.log(manutencoes);
        res.status(200).json(manutencoes);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}
//Método responsável por consultar o manutencao na base de dados
api.detalhesManutencao = function(req, res) {
    let id = req.params.id;
    model
    .findOne({"codManutencao": id})
    .select()
    .then(function(manutencao) {
        console.log(manutencao);
        res.status(200).json(manutencao);

    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

//Metódo responsável por retornar a consulta de manutenções agendadas
api.consultaAgendamentos = function(req, res) {
    var manutencao = req.body;
    model
    .find({"nomeLaboratorioSolicitante": manutencao.nomeLaboratorioSolicitante,
                "unidadeSolicitante": manutencao.unidadeSolicitante,
                "dataInicioManutencao":  {"$gte": manutencao.gte, "$lt": manutencao.lt}})
    .select()
    .then(function(equipamento) {
        console.log(equipamento);
        res.status(200).json(equipamento);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

//Método responsável por cadastrar o manutencao na base de dados
api.cadastroManutencao = function(req, res) {
    let manutencao = req.body;
    model
        .create(manutencao)
        .then(function(manutencao) {
            console.log(manutencao);
            res.status(200).json(manutencao);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por atualizar o manutencao na base de dados
api.atualizarManutencao = function(req, res) {
    let manutencao = req.body;
    model
        .findByIdAndUpdate(req.params.id, manutencao)
        .then(function(manutencao) {
            console.log(manutencao);
            res.status(200).json(manutencao);

        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}

//Método responsável por deletar o manutencao na base de dados
api.deletarManutencao = function(req,res) {
    let id = req.params.id;
    model
    .remove({"codManutencao": id})
    .then(function() {
        res.sendStatus(204);
    }, function(error) {
        console.log(error);
        res.status(500).json(error);
    });
}

module.exports = api;