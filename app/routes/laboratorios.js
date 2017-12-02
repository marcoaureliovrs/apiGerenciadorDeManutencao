module.exports = function(app){
    var mongoose = require('mongoose');
    var model = mongoose.model('Laboratorio');
        
   
    //Método responsável por listar as manutenções na base de dados
    app.get('/laboratorios', function(req, res){
        model
        .find()
        .select()
        .then(function(laboratorios) {
            console.log(laboratorios);
                    res.status(200).json(laboratorios); 
            });
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
    });


    //Método responsável por consultar o laboratorio na base de dados
    app.get('/laboratorios/laboratorio/:id', function(req, res){
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
    });

    //Método responsável por cadastrar o laboratorio na base de dados
    app.post('/laboratorios/laboratorio', function(req, res){
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
    });

    //Método responsável por atualizar o laboratorio na base de dados
    app.put('/laboratorios/laboratorio/:id', function(req, res){
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
    });

    //Método responsável por deletar o laboratorio na base de dados
    app.delete('/laboratorios/laboratorio/:id', function(req, res){
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
