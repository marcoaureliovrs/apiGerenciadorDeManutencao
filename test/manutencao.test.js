const supertest = require('supertest')
const app = require('../index')
var agent = supertest.agent(app)
var manutencaoConsultada


var manutencao = {
	"codManutencao": "UASHUASHASUHDUSHF",
    "nomeLaboratorioSolicitante": "Delboni Auriemo Vila Diva",
    "enderecoLaboratorioSolicitante": "Av. Sapopemba 4100",
    "nomeFuncionarioSolicitante": "Marco Aurélio",
    "nomeFornecedor": "XPTO",
    "nomeTecnico": "Diego",
    "codEquipamento": "3334444555",
    "nomeEquipamento": "Máquina de Raio X",
    "modeloEquipamento": "X3333",
    "dataInicioManutencao": "2016-12-04T16:00:00Z",
    "dataFinalManutencao": "2016-12-05T16:00:00Z",
    "statusManutencao":"agendado",
    "tipoManutencao": "Preventiva",
    "laudoTecnicoManutencao":"Máquina com parafusos gastos"
}



describe("Rotina de Cadastro, Consulta, Atualização e Deleção de Manutenção", function () {
    
	it("Cadastro de manutenção", function(done) {
		agent
			.post("/manutencoes/manutencao")
			.send(manutencao)
			.expect(200)
			.end(function(err) {
    			done()
			});
	})


	it ("Consulta dos destalhes da manutenção", function(done) {
		agent
            .get("/manutencoes/manutencao/" + manutencao.codEquipamento)
			.expect(200)
			.expect('Content-Type', /json/)
			.expect(function(res) {
				manutencaoConsultada = res.body
				console.log(manutencaoConsultada)
			})
			.end(function(err) {
      			done()
  			})

    })
    
    it ("Listagem de Manutenções", function(done) {
        agent
            .get("manutencoes")
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
        delete manutencaoConsultada.__v
		manutencaoConsultada.nomeFuncionarioSolicitante = "Marco Gorak"
		console.log(manutencaoConsultada)

		agent
			.put("/manutencoes/manutencao/" + manutencaoConsultada._id)
			.send(manutencaoConsultada)
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
			.delete("/manutencoes/manutencao/" + manutencaoConsultada._id)
			.expect(204)
			.end(function(err) {
      			done()
  			})
	})

})