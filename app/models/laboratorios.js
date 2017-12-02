var mongoose = require ('mongoose');
var schema = mongoose.Schema({
    codLaboratorio: {
        type: String,
        required: true
    },
    nomeLaboratorio: {
        type: String,
        required: true
    },
    logoLaboratorio:{
        type: String,
        required: true
    }

})
mongoose.model('Laboratorio', schema);
