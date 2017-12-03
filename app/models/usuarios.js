var mongoose = require ('mongoose');
var bcrypt = require('bcrypt');


var schema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		index: true
	},
	passwd: {
		type: String,
		required:true
	},
	cpf: {
		type: Number,
		required: false,
	},
	date_of_birth: {
		type: Date,
		required: false
	},
	permision: {
		type: Number,
		default: 1
	},
	cell_phone: {
		type: Number,
		required: false
	},
	street: {
		type: String,
		required: false
	},
	number: {
		type: Number,
		required: false
	},
	complement: {
		type: String,
		required: false
	},
	zip: {
		type: Number,
		required: false
	},
	neighborhood: {
		type: String,
		required: false
	},
	district: {
		type: String,
		required: false
	},
	country: {
		type: String,
		required: false
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	profile: {
		type: String
	}

});

schema.pre('save', function(next) {
	if(this.passwd) {                                                                                                                                                        
        var salt = bcrypt.genSaltSync(10)                                                                                                                                     
        this.passwd  = bcrypt.hashSync(this.passwd, salt)                                                                                                                
    }                                                                                                                                                                          
    next()  
});

schema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.passwd, function(err, isMatch) {
		if (!err) {
			return cb(null, isMatch);
		} else {
			return cb(err);			
		}      
    });
};


module.exports = mongoose.model('Usuario', schema);

