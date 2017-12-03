var mongoose = require ('mongoose');
var schema = mongoose.Schema({
    codManutencao: {
        type: Object,
        required: false
    },
    nomeLaboratorioSolicitante: { //filial
		type: String,
		required: false
    },
    enderecoLaboratorioSolicitante: {
        type: String,
        required: false,
    },
    unidadeSolicitante:{
        type: String,
        required: false,
    },
    nomeFuncionarioSolicitante: {
        type: String,
        required: false
    },
    nomeFornecedor: {
		type: String,
		required: false
    },
    nomeTecnico: {
		type: String,
		required: false
    },
    codEquipamento: {
        type: String,
        required: false
    },
    nomeEquipamento: {
        type: String,
        required: false
    },
    modeloEquipamento: {
        type: String,
        required: false
    },
    dataInicioManutencao: {
        type: Date,
        require: false
    },
    dataFinalManutencao: {
        type: Date,
        require: false
    },
    statusManutencao:{ //agendado, andamento, finalizado
        type: String,
        require: false
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