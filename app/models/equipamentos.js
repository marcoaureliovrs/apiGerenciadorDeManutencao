var mongoose = require ('mongoose');
var schema = mongoose.Schema({
    codEquipamento: {
        type: String,
        required: true
    },
    nomeNomeEquipamento: {
        type: String,
        required: true
    },
    modeloEquipamento:{
        type: String,
        required: true
    },
    nomeFrabricante:{
        type: String,
        required: true
    }

})
mongoose.model('Equipamento', schema);