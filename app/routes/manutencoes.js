module.exports = function(app){
    var api = app.api.manutencoes;
   
    app.route("/manutencoes")
        .get(api.listarManutencoes);

    app.route("/manutencoes/manutencao/:id")
        .get(api.detalhesManutencao)
        .put(api.atualizarManutencao)
        .delete(api.deletarManutencao);
    
    app.route("/manutencoes/agendamentos/")
        .get(api.consultaAgendamentos);
    
    app.route("/manutencoes/manutencao")
        .get(api.cadastroManutencao);
  
}
