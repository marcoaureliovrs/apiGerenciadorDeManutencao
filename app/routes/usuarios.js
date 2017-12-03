module.exports = function (app) {
	var api = app.api.usuarios;


	app.route('/users')

		/**
	 	* @api {get} /users Listagem de Usuários
	 	* @apiGroup Usuario
	 	* @apiHeader {String} x-access-token Token do usuário autenticado
	 	* @apiHeaderExample{json} Header
	 	* 		{"x-access-token": "UAHSUHSSUDHAUSIHDUASHD"}
	 	*/
		.get(api.list);

	
	app.route("/user")

		/**
	 	* @api {get} /user Consulta
	 	* @apiGroup Usuario
	 	* @apiHeader {String} x-access-token Token do usuário autenticado
	 	* @apiHeaderExample{json} Header
	 	* 		{"x-access-token": "UAHSUHSSUDHAUSIHDUASHD"}
	 	* @apiSuccess {String} name Nome
	 	* @apiSuccess {String} email Email
	 	* @apiSuccess {String} profile Imagem de Profile
	 	* @apiSuccessExample {json} Sucesso
	 	* 	HTTP/1.1 200 OK
	 	* 	{
	 	* 		"name":"Marco",
	 	* 		"email":"teste@app4party.com.br",
	 	* 		"profile":"http://cdn.app4party.com.br/profile.png"
	 	* 	}
	 	*/
		.get(api.readUser)

		/**
	 	* @api {delete} /user Delete
	 	* @apiGroup Usuario
	 	* @apiHeader {String} x-access-token Token do usuário autenticado
	 	* @apiHeaderExample{json} Header
	 	* 		{"x-access-token": "UAHSUHSSUDHAUSIHDUASHD"}
	 	* @apiParamExample {json} Usuário
	 	* 	{
	 	* 		"id":"uASHUSHUSHSU"
		* 	}
		* @apiSuccessExample {json} Sucesso
	 	* 	  HTTP/1.1 204 OK 
	 	*/
		.delete(api.deleteUser)
	

		/**
	 	* @api {put} /user Atualização
	 	* @apiGroup Usuario
	 	* @apiHeader {String} x-access-token Token do usuário autenticado
	 	* @apiHeaderExample{json} Header
	 	* 		{"x-access-token": "UAHSUHSSUDHAUSIHDUASHD"}
	 	* @apiParam {String} _id ID
	 	* @apiParam {String} name Nome
	 	* @apiParam {String} email Email
	 	* @apiParam {String} passwd Senha
	 	* @apiParam {Number} cpf CPF
	 	* @apiParam {Date} date_of_birth Data de nascimento
	 	* @apiParam {Number} cell_phone Telefone Celular
	 	* @apiParam {String} street Logradouro
	 	* @apiParam {Number} number Número
	 	* @apiParam {String} complement Complemento
	 	* @apiParam {Number} zip CEP
	 	* @apiParam {String} neighborhood Bairro
	 	* @apiParam {String} district Estado
	 	* @apiParam {String} country Cidade
	 	* 
	 	* @apiParamExample {json} Usuário
	 	*	{
	 	*		"_id":"UASHUASHUSHASUH",
		*		"name": "Teste Atualizado",
	 	*		"email": "teste@exemplo.com.br",
	 	*		"passwd": "supertest123",
	 	*		"cpf": 321,
	 	*		"date_of_birth": null,
	 	*		"cell_phone": null,
	 	*		"street": null,
	 	*		"number": null,
	 	*		"complement": null,
	 	*		"zip": null,
	 	*		"neighborhood": null,
	 	*		"district": null,
	 	*		"country": null,
	 	*		"updated_at":null
		*	}
		*
		* @apiSuccessExample {json} Resposta da atualização
		*	{
	 	*		"_id":"UASHUASHUSHASUH",
		*		"name": "Teste Atualizado",
	 	*		"email": "teste@exemplo.com.br",
	 	*		"passwd": "supertest123",
	 	*		"cpf": 321,
	 	*		"date_of_birth": null,
	 	*		"cell_phone": null,
	 	*		"street": null,
	 	*		"number": null,
	 	*		"complement": null,
	 	*		"zip": null,
	 	*		"neighborhood": null,
	 	*		"district": null,
	 	*		"country": null,
	 	*		"updated_at":null
		*	}
		*
	 	*/
		.put(api.updateUser);
}