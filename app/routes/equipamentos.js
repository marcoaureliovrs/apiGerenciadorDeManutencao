module.exports = function(app){
    var api = app.api.equipamentos;

    app.route('/equipamentos')
        .get(api.listarEquipamentos);
    
    app.route('/equipamentos/equipamento/:id')
        .get(api.detalhesEquipamento)
        .put(api.atualizarEquipamento)
        .delete(api.deletarEquipamento);

    app.route('/equipamentos/equipamento')
        .post(api.cadastroEquipamento);
};
