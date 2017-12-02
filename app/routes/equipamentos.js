module.exports = function(app){
    var mongoose = require('mongoose');
    var model = mongoose.model('Equipamento');
        
   
    //Método responsável por listar as manutenções na base de dados
    app.get('/equipamentos', function(req, res){
        model
        .find()
        .select()
        .then(function(equipamentos) {
            console.log(equipamentos);
                    res.status(200).json(equipamentos); 
            });
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
    });


    //Método responsável por consultar o equipamento na base de dados
    app.get('/equipamentos/equipamento/:id', function(req, res){
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
    });

    //Método responsável por cadastrar o equipamento na base de dados
    app.post('/equipamentos/equipamento', function(req, res){
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
    });

    //Método responsável por atualizar o equipamento na base de dados
    app.put('/equipamentos/equipamento/:id', function(req, res){
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
    });

    //Método responsável por deletar o equipamento na base de dados
    app.delete('/equipamentos/equipamento/:id', function(req, res){
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
