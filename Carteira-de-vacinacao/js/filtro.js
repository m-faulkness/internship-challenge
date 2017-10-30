var filtro = document.querySelector("#filtra-tabela");

filtro.addEventListener("input", function(event){
	console.log(this.value);

	var cadastros = document.querySelectorAll(".cadastro");

	if(this.value.length > 0){
		for (var i = 0; i < cadastros.length; i++) {
			var cadastro = cadastros[i];
			var campoNome = cadastro.querySelector(".tabela-nome");

			if(cadastro.textContent.includes(this.value)){
				cadastro.classList.remove("sumir");
			}else{
				cadastro.classList.add("sumir");
			}
		}
	}else{
		for (var i = 0; i < cadastros.length; i++){
			var cadastro = cadastros[i];
			cadastro.classList.remove("sumir");
		}
	}
});