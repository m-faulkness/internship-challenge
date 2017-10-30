var salvar = document.querySelector(".btn-salvar");
var formulario = document.querySelector(".formulario");

salvar.addEventListener("click", function(event){
	event.preventDefault();

	var dado = obtemDados(formulario);

	var erro = validaCampos(dado);

	if(erro.length > 0){
		exibeErro(erro);
		return;
	}

	var tr = criaElementoTR(dado);

	var tabela = document.querySelector(".tabela");
	tabela.appendChild(tr);

	formulario.reset();
	salvarTabela();
	location.reload();
});

function validaCampos(dado){
	var erros = [];

	verificaNome = validaNome(dado.nome);
	if(!verificaNome){
		erros.push("Informe o nome");
		formulario.nome.focus();
	}

	verificaData = validaData(dado.data);
	if(!verificaData){
		erros.push("Informe a data");
		formulario.dataAplicacao.focus();
	}
	return erros;
}

function exibeErro(erro){
    var ul = document.querySelector(".erros");
    ul.innerHTML = "";

    erro.forEach(function(e){
        var li = document.createElement("li");
        li.textContent = e;
        li.classList.add("erro");
        ul.appendChild(li);
    });
}

function obtemDados(form){
	

	var dados = {
		nome: form.nome.value,
		vacina: form.vacinas.options[form.vacinas.selectedIndex].text,
		data: form.dataAplicacao.value
	}
	return dados;
}

function distribuiDados(nome, vacina, data){
	nomeTd.textContent = nome;
	vacinaTd.textContent = vacina;
	dataTd.textContent = data;
}

function criaElementoTD(dados, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dados;

	return td;
}

function criaElementoTR(dados){
	var tr = document.createElement("tr");

	tr.classList.add("cadastro");
	tr.appendChild(criaElementoTD(dados.nome, "tabela-nome"));
	tr.appendChild(criaElementoTD(dados.vacina, "tabela-vacina"));
	tr.appendChild(criaElementoTD(separaData(dados.data,1), "tabela-dataAplicacao"));
	tr.appendChild(criaElementoTD(new Date().toLocaleDateString(), "tabela-dataCadastro"));

	return tr;
}

function separaData(dados,opc){
	var sd = dados.split("-");
	var ano = sd[0];
	var mes = sd[1];
	var dia = sd[2];
	
	if(opc == 1){
		return(dia+"-"+mes+"-"+ano);
	}
	if(opc == 2){
		return(dia+"-"+mes+"-"+ano);
	}
}