module.exports = function(app){
    var mongoose = require('mongoose');
    var model = mongoose.model('Manutencao');
        
   
    //Método responsável por listar as manutenções na base de dados
    app.get('/manutencoes', function(req, res){
        model
        .find()
        .select()
        .then(function(manutencoes) {
            console.log(manutencoes);
                    res.status(200).json(manutencoes); 
            });
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
    });


    //Método responsável por consultar o manutencao na base de dados
    app.get('/manutencoes/manutencao/:id', function(req, res){
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
    });

    //Método responsável por cadastrar o manutencao na base de dados
    app.post('/manutencoes/manutencao', function(req, res){
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
    });

    //Método responsável por atualizar o manutencao na base de dados
    app.put('/manutencoes/manutencao/:id', function(req, res){
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
    });

    //Método responsável por deletar o manutencao na base de dados
    app.delete('/manutencoes/manutencao/:id', function(req, res){
        let id = req.params.id;
        model
		.remove({"_id": id})
		.then(function() {
			res.sendStatus(204);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		})
    });


};
