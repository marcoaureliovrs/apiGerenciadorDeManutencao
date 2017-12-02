const supertest = require('supertest')
const app = require('../index')
var agent = supertest.agent(app)



var laboratorio = {
    "codLaboratorio":"1",
    "nomeLaboratorio":"ALTA EXCELÊNCIA DIAGNÓSTICA",
    "logoLaboratorio":"http://dasa.com.br/sites/default/files/inline-images/icone_Alta.png"
}

/**
1,'ALTA EXCELÊNCIA DIAGNÓSTICA','http://dasa.com.br/sites/default/files/inline-images/icone_Alta.png'
2,'DELBONI AURIEMO','http://dasa.com.br/sites/default/files/inline-images/icone_delboni.png'
3,'LAVOISIER','http://dasa.com.br/sites/default/files/inline-images/icone_lavoisier.jpg'
4,'LABORATÓRIO OSWALDO CRUZ','http://dasa.com.br/sites/default/files/inline-images/Bottom%20-%20LOC.png'
5,'BRONSTEIN','http://dasa.com.br/sites/default/files/inline-images/icone_bronstein.jpg'
6,'LÂMINA','http://dasa.com.br/sites/default/files/inline-images/icone_lamina.jpg'
7,'SÉRGIO FRANCO','http://dasa.com.br/sites/default/files/inline-images/icone_sergiofranco.png'
8,'CDPI','http://dasa.com.br/sites/default/files/inline-images/icone_cdpi.png'
9,'MULTI-IMAGEM','http://dasa.com.br/sites/default/files/inline-images/icone_multiimagem.png'
10,'EXAME','http://dasa.com.br/sites/default/files/inline-images/Bottom%20-%20EXAME.png'
11,'ATALAIA','http://dasa.com.br/sites/default/files/inline-images/icone_atalaia.jpg'
12,'CEDIC','http://dasa.com.br/sites/default/files/inline-images/icone_cedic.jpg'
13,'CEDILAB','http://dasa.com.br/sites/default/files/inline-images/icone_cedilab.jpg'
14,'IMAGE MEMORIAL','http://dasa.com.br/sites/default/files/inline-images/icone_imagememorial.jpg'
15,'LABPASTEUR','http://dasa.com.br/sites/default/files/inline-images/icone_labpasteur.jpg'
16,'UNIMAGEM','http://dasa.com.br/sites/default/files/inline-images/icone_unimagem.jpg'
17,'GILSON CIDRIM','http://dasa.com.br/sites/default/files/inline-images/Bottom%20-%20GILSON%20CIDRIM.png'
18,'GASPAR','http://dasa.com.br/sites/default/files/inline-images/icone_labgaspar.png'
19,'CERPE','http://dasa.com.br/sites/default/files/inline-images/v2_logo_cerpe_round.png'
20,'FRISCHMANN AISENGART','http://dasa.com.br/sites/default/files/inline-images/icone_frischmann.jpg'
21,'LÂMINA SC','http://dasa.com.br/sites/default/files/inline-images/icone_vitalamina.jpg'
22,'ALVARO','http://dasa.com.br/sites/default/files/inline-images/icone_alvaro.jpg'
23,'CIENTÍFICA LAB','http://dasa.com.br/sites/default/files/inline-images/icone_cientifica.jpg'
24,'PREVILAB','http://dasa.com.br/sites/default/files/inline-images/icone_previlab.png'
25,'CYTOLAB','http://dasa.com.br/sites/default/files/inline-images/icone_cytolab.png'
*/


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
            .get("/laboratorios/laboratorio/" + laboratorio.codLaboratorio)
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

	it ("Atualização dos detalhes do Laboratório", function(done) {
		laboratorio.nomeLaboratorio = "ALTA EXCELÊNCIA DIAGNÓSTICA Ltda."
		console.log(laboratorio)

		agent
			.put("/laboratorios/laboratorio/" + laboratorio.codLaboratorio)
			.send(laboratorio)
			.expect(200)
			.expect(function(res) {
				console.log(res.body);
			})
			.end(function(err) {
      			done()
  			})
	})

	it ("Excluir Laboratório", function(done) {
		agent
			.delete("/laboratorios/laboratorio/" + laboratorio.codLaboratorio)
			.expect(204)
			.end(function(err) {
      			done()
  			})
	})

})