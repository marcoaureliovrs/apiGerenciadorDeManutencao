const supertest = require('supertest')
const app = require('../index')
var agent = supertest.agent(app)

var equipamento = {
    "codEquipamento":"1",
    "nomeNomeEquipamento":"Radiografia convencional (Raio-x)",
    "modeloEquipamento":"Multix Fusion Max ",
    "nomeFrabricante":"Siemens"
}

/**
 var equipamento = {
    "codEquipamento":"2",
    "nomeNomeEquipamento":"Tomografia computadorizada",
    "modeloEquipamento":"Revolution CT",
    "nomeFrabricante":"GE Health Care"
}
 
var equipamento = {
    "codEquipamento":"3",
    "nomeNomeEquipamento":"Ressonância magnética",
    "modeloEquipamento":"Signa Explorer",
    "nomeFrabricante":"GE Healthcare"
}
 */

describe("Rotina de Cadastro, Consulta, Atualização e Deleção de Manutenção", function () {
    
	it("Cadastro de manutenção", function(done) {
		agent
			.post("/equipamentos/equipamento")
			.send(equipamento)
			.expect(200)
			.end(function(err) {
    			done()
			});
	})


	it ("Consulta dos destalhes da manutenção", function(done) {
		agent
            .get("/equipamentos/equipamento/" + equipamento.codEquipamento)
			.expect(200)
			.expect('Content-Type', /json/)
			.expect(function(res) {
				console.log(res.body)
			})
			.end(function(err) {
      			done()
  			})

    })
    
    it ("Listagem de Manutenções", function(done) {
        agent
            .get("equipamentos")
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function(res) {
				console.log(res.body)
			})
			.end(function(err) {
      			done()
  			})

    })

	it ("Atualização dos detalhes da manutenção", function(done) {
		equipamento.nomeNomeEquipamento = "Radiografia convencional"

		agent
			.put("/equipamentos/equipamento/" + equipamento._id)
			.send(equipamento)
			.expect(200)
			.expect(function(res) {
				console.log(res.body);
			})
			.end(function(err) {
      			done()
  			})
	})

	it ("Excluir Manutenção", function(done) {
		agent
			.delete("/equipamentos/equipamento/" + equipamento.codEquipamento)
			.expect(204)
			.end(function(err) {
      			done()
  			})
	})

})