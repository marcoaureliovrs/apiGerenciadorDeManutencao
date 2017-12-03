module.exports = function(app){
    var api = app.api.laboratorios;
     
    app.route('/laboratorios')
        .get(api.listarLaboratorios);

    app.route('/laboratorios/laboratorio/:id')
        .get(api.detalhesLaboratorio)
        .put(api.atualizarLaboratorio)
        .delete(api.deletarLaboratorio);
    
    app.route('/laboratorios/laboratorio')
        .post(api.cadastrarLaboratorio);
};
