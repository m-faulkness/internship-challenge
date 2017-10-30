var vac = [];

var tabela = document.querySelector(".tabela");
var ver = JSON.parse(localStorage.getItem("vac"));
var dia;

tabela.addEventListener("dblclick", function(event){
	var cadastro = event.target.parentNode;
	var campoID = cadastro.querySelector("td").textContent;

	setTimeout(function(){
		cadastro.classList.add("fadeOut");
	},	400);

	for(var i = 0; i < ver.length; i++){
		if(ver[i].id == campoID){
			ver.splice(i,1);
			localStorage.setItem("vac", JSON.stringify(ver));
			break;
		}
	}

	location.reload();
});

tabela.addEventListener("click", function(event){
	var campoID = event.target.parentNode.querySelector("td.tabela-id").textContent;
	var campoNome = event.target.parentNode.querySelector("td.tabela-nome").textContent;
	var campoVacina = event.target.parentNode.querySelector("td.tabela-vacina").textContent;
	var campoData = event.target.parentNode.querySelector("td.tabela-dataAplicacao").textContent;

	for(var i = 0; i < ver.length; i++){
		if(ver[i].id == campoID){
			formulario.nome.value = campoNome;
			formulario.vacinas.options[formulario.vacinas.selectedIndex].text = campoVacina;
			formulario.dataAplicacao.value = separaData(campoData,2);

			console.log(ver[i].nome);
		}
	}
	
	dia = new Date().toLocaleDateString();
});

function salvarTabela(){
	var cadastros = document.querySelectorAll(".cadastro");

	for(var i = 0; i < cadastros.length; i++){
		var cadastro = cadastros[i];

		var idTabela = i;
		var nomeTabela = cadastro.querySelector(".tabela-nome").textContent;
		var vacinaTabela = cadastro.querySelector(".tabela-vacina").textContent;
		var dataVacinaTabela = cadastro.querySelector(".tabela-dataAplicacao").textContent;
		var dataCadastroTabela = cadastro.querySelector(".tabela-dataCadastro").textContent;

		var cad = {
			id: idTabela,
			nome: nomeTabela,
			vacina: vacinaTabela,
			dataVacina: dataVacinaTabela,
			dataCadastro: dataCadastroTabela
		}

		vac[i] = cad;
		localStorage.setItem("vac", JSON.stringify(vac));
	}
	
	dia = new Date().toLocaleDateString();
	localStorage.setItem("dia", dia);
}

function insereTabela(){
	for(var i = 0; i < ver.length; i++){

		var tr = document.createElement("tr");
		tr.classList.add("cadastro");

		var idTD= document.createElement("td");
		idTD.classList.add("tabela-id");
		idTD.textContent = ver[i].id;

		var nomeTD = document.createElement("td");
		nomeTD.classList.add("tabela-nome");
		nomeTD.textContent = ver[i].nome;

		var vacinaTD = document.createElement("td");
		vacinaTD.classList.add("tabela-vacina");
		vacinaTD.textContent = ver[i].vacina;

		var dataAplicacaoTD = document.createElement("td");
		dataAplicacaoTD.classList.add("tabela-dataAplicacao");
		dataAplicacaoTD.textContent = ver[i].dataVacina;
		
		var dataCadastroTD = document.createElement("td");
		dataCadastroTD.classList.add("tabela-dataCadastro");
		dataCadastroTD.textContent = ver[i].dataCadastro;

		tr.appendChild(idTD);
		tr.appendChild(nomeTD);
		tr.appendChild(vacinaTD);
		tr.appendChild(dataAplicacaoTD);
		tr.appendChild(dataCadastroTD);

		var tb = document.querySelector(".tabela");
		tb.appendChild(tr);

		dia = localStorage.getItem("dia");
		var msgDia = document.querySelector("#dia");
		msgDia.textContent = dia;
	}
}