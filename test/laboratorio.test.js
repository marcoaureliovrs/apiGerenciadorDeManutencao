const supertest = require('supertest')
const app = require('../index')
var agent = supertest.agent(app)
var laboratorioConsultado


var laboratorio = {
    "codLaboratorio":"1",
    "nomeLaboratorio":"ALTA EXCELÊNCIA DIAGNÓSTICA",
    "logoLaboratorio":"http://dasa.com.br/sites/default/files/inline-images/icone_Alta.png"
}

describe("Rotina de Cadastro, Consulta, Atualização e Deleção de Manutenção", function () {
    
	it("Cadastro de manutenção", function(done) {
		agent
			.post("/laboratorios/laboratorio")
			.send(laboratorio)
			.expect(200)
			.end(function(err) {
    			done()
			});
	})


	it ("Consulta dos destalhes da manutenção", function(done) {
		agent
            .get("/laboratorios/laboratorio/" + laboratorio.codEquipamento)
			.expect(200)
			.expect('Content-Type', /json/)
			.expect(function(res) {
				laboratorioConsultado = res.body
				console.log(laboratorioConsultado)
			})
			.end(function(err) {
      			done()
  			})

    })
    
    it ("Listagem de Manutenções", function(done) {
        agent
            .get("laboratorios")
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
        delete laboratorioConsultado.__v
		laboratorioConsultado.nomeFuncionarioSolicitante = "Marco Gorak"
		console.log(laboratorioConsultado)

		agent
			.put("/laboratorios/laboratorio/" + laboratorioConsultado._id)
			.send(laboratorioConsultado)
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
			.delete("/laboratorios/laboratorio/" + laboratorioConsultado._id)
			.expect(204)
			.end(function(err) {
      			done()
  			})
	})

})