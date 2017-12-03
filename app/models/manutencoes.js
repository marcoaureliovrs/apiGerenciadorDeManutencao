var mongoose = require ('mongoose');
var schema = mongoose.Schema({
    codManutencao: {
        type: Object,
        required: true
    },
    nomeLaboratorioSolicitante: { //filial
		type: String,
		required: true
    },
    enderecoLaboratorioSolicitante: {
        type: String,
        required: true,
    },
    unidadeSolicitante:{
        type: String,
        required: true,
    },
    nomeFuncionarioSolicitante: {
        type: String,
        required: true
    },
    nomeFornecedor: {
		type: String,
		required: true
    },
    nomeTecnico: {
		type: String,
		required: false
    },
    codEquipamento: {
        type: String,
        required: true
    },
    nomeEquipamento: {
        type: String,
        required: false
    },
    modeloEquipamento: {
        type: String,
        required: true
    },
    dataInicioManutencao: {
        type: Date,
        require: true
    },
    dataFinalManutencao: {
        type: Date,
        require: false
    },
    statusManutencao:{ //agendado, andamento, finalizado
        type: String,
        require: true
    },
    tipoManutencao: { //planejada, emergencial
        type: String,
        required: true
    },
    laudoTecnicoManutencao: { //A Definir como será armazenado (Ex.: Scaneamento da Nota de Manutenção)
        type: String,
        required: false
    }

});

mongoose.model('Manutencao', schema);