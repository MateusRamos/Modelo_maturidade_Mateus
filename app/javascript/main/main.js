//*Função de expandir e retrair as camadas dos modelos
function expandeMain(id_expandir) {
  var div_expandir = document.getElementById('main-' + id_expandir);
  var plus_trocar = document.getElementById('plus-' + id_expandir);
  var minus_trocar = document.getElementById('minus-' + id_expandir);

  if (div_expandir.classList.contains('hidden')) {
    div_expandir.classList.remove('hidden');
    plus_trocar.classList.add('hidden');
    minus_trocar.classList.remove('hidden');

  } else {
    div_expandir.classList.add('hidden');
    plus_trocar.classList.remove('hidden');
    minus_trocar.classList.add('hidden');
  }
}
//* Fim ---


//* Função de expandir e retrair opção de resultados esperados no cadastro de modelo
var escolha_sim = document.getElementById("escolha_resultado_sim");
var escolha_nao = document.getElementById("escolha_resultado_nao");
var nivel_processo = document.getElementById("nivel_processo");
var nivel_resultado_esperado = document.getElementById("nivel_resultado_esperado");
var tipo_nivel_numerico = document.getElementById("tipo_nivel_numerico");
var tipo_nivel_alfanumerico = document.getElementById("tipo_nivel_alfanumerico");

escolha_sim.addEventListener("click", function () {
  if (escolha_sim.checked) {
    resultado_escolha(1);
  }
})
escolha_nao.addEventListener("click", function () {
  if (escolha_nao.checked) {
    resultado_escolha(2);
  }
})
nivel_processo.addEventListener("click", function () {
  if (nivel_processo.checked) {
    nivel_escolha(1);
  }
})
nivel_resultado_esperado.addEventListener("click", function () {
  if (nivel_resultado_esperado.checked) {
    nivel_escolha(2);
  }
})
tipo_nivel_numerico.addEventListener("click", function () {
  if (tipo_nivel_numerico.checked) {
    tipo_nivel(1);
  }
})
tipo_nivel_alfanumerico.addEventListener("click", function () {
  if (tipo_nivel_alfanumerico.checked) {
    tipo_nivel(2);
  }
})
function resultado_escolha(escolha) {
  if (escolha == "2") {
    document.getElementById("nivel_escolha").classList.remove("hidden");
    document.getElementsByClassName("resultado_escolha")[0].value = 2;
  } else if (escolha == "1") {
    document.getElementById("nivel_escolha").classList.add("hidden");
    document.getElementById("nivel_processo").checked = true;
    document.getElementById("nivel_resultado_esperado").checked = false;
    document.getElementsByClassName("nivel_escolha")[0].value = 1;
    document.getElementsByClassName("resultado_escolha")[0].value = 1;
  }
}
function nivel_escolha(escolha) {
  if (escolha == "2") {
    document.getElementsByClassName("nivel_escolha")[0].value = 2;
  } else if (escolha == "1") {
    document.getElementsByClassName("nivel_escolha")[0].value = 1;
  }
}

function tipo_nivel(escolha) {
  if (escolha == "2") {
    document.getElementsByClassName("tipo_nivel")[0].value = 2;
  } else if (escolha == "1") {
    document.getElementsByClassName("tipo_nivel")[0].value = 1;
  }
}
//* Fim ---


//* Mostrar titulo de um nível nas telas de Utilizar modelo e cadastrar estrutura:
function mostra_titulo(id) {
  let titulo = document.getElementById('titulo-nivel-'+id);
  if(titulo.style.maxHeight == '25px') {
    titulo.style.maxHeight = 'none';
  } else {
    titulo.style.maxHeight = '25px';
  }
}
//* Fim ---

//* Mostrar Caixa de Criação de nova estrutura para um modelo ja criado:
function showNewStructure(id) {
  let div_criacao = document.getElementById('create_new_'+id);

  if(div_criacao.classList.contains('hidden'))
    div_criacao.classList.remove('hidden');
  else
    div_criacao.classList.add('hidden');
}
//* Fim ---

// //* Mostrar Modal de informações sobre a página:
// function showModalInfos() {
//   let modalInfos = document.getElementById('infos_modal');

//   if(modalInfos.classList.contains('hidden'))
//     modalInfos.classList.remove('hidden');
//   else
//     modalInfos.classList.add('hidden');
// }
// //* Fim ---

//* Mostrar Modal de confirmação de exclusão:
function showModalConfirmacao() {
  let modalConfirmacao = document.getElementById('modal_confirmacao');
  let inputConfirmaExclusao = document.getElementById('input_confirmation_exclusao');
  let btnConfirmaExclusao = document.getElementById('btn_confirma_exclusao');

  if(modalConfirmacao.classList.contains('hidden')) {
    modalConfirmacao.classList.remove('hidden');
    inputConfirmaExclusao.value = '';
    btnConfirmaExclusao.disabled = true;
  }
  else
    modalConfirmacao.classList.add('hidden');
}
//* Fim ---

//* Retira o disabled do botao de exclusão do modal de confirmação de exclusão
function liberaBotaoExclusao() {
  let inputConfirmaExclusao = document.getElementById('input_confirmation_exclusao');
  let btnConfirmaExclusao = document.getElementById('btn_confirma_exclusao');

  if(inputConfirmaExclusao.value == 'confirmo')
    btnConfirmaExclusao.disabled = false;
  else
    btnConfirmaExclusao.disabled = true;
}
//* Fim ---

//* Utilziar modelo: mostra os inputs de nivel a serem escolhidos
function mostraRangePriorizacao() {
  let checkboxPriorizacao = document.getElementById('config-priorizacao');
  let divInputsPriorizacao = document.getElementById('config-priorizacao-options');
  let btnSubmitConfigPrimaria = document.getElementById('config_primaria_submitBtn');

  if(checkboxPriorizacao.checked == true) {
    divInputsPriorizacao.style.visibility = "visible";
    btnSubmitConfigPrimaria.style.alignSelf = "end";
  } else {
    divInputsPriorizacao.style.visibility = "hidden";
    btnSubmitConfigPrimaria.style.alignSelf = "start";
  }
    

}
//* Fim ---

//* Utilizar Modelo: mostrar a configuração inicial do modelo:
function mostraOpcoesPrimariasModelo() {
  var divConfigPrimariaModelo = document.getElementById("config_primaria_modelo");

  if(divConfigPrimariaModelo.classList.contains("hidden")) {
    divConfigPrimariaModelo.classList.remove("hidden");
  } else {
    divConfigPrimariaModelo.classList.add("hidden");
  }
}
//* Fim ---