let array_veiculos = [];
let total_combustivel = 0;
let total_km = 0;
let total_dsp = 0;
let media_comb = 0;
let media_km = 0;
let media_dsp = 0;
let combustivel = 0;
let quilometros = 0;
let desempenho = 0;

window.onload = function () {
  document.getElementById("salvar").disabled = true;
  document.getElementById("registrar").disabled = true;
  document.getElementById("btn-finish").disabled = true;
  document.getElementById("btn-clear").disabled = true;

};

// Função de carrega e salva os dados digitados
function carregarDados() {
  combustivel = Number(document.veiculos.quantidade_combustivel.value);
  quilometros = Number(document.veiculos.quantidade_quilometros.value);
  desempenho = Number((quilometros / combustivel).toFixed(2));

  array_veiculos.push({ combustivel, quilometros, desempenho });


  if (document.getElementById("desempenho").innerHTML !== "") {
    document.getElementById("desempenho").innerHTML = "";
  }

  for (let i = 0; i < array_veiculos.length; i++) {
    if (i === array_veiculos.length - 1) {
      document.getElementById("desempenho").innerHTML = `Desempenho em quilômetros por litro (Km/l): ${array_veiculos[i].desempenho}`;
    }

  }

  document.getElementById("salvar").disabled = true;
  document.getElementById("registrar").disabled = false;

  document.veiculos.quantidade_combustivel.disabled = true;
  document.veiculos.quantidade_quilometros.disabled = true;


  document.getElementById("btn-finish").disabled = false;

  if (document.getElementById("btn-clear").disabled) {
    document.getElementById("btn-clear").disabled = false;
  }
}

// Função que limpa os inputs e registra novos veículos
function registrarVeiculo() {
  document.veiculos.quantidade_combustivel.disabled = false;
  document.veiculos.quantidade_quilometros.disabled = false;
  document.veiculos.quantidade_combustivel.value = "";
  document.veiculos.quantidade_quilometros.value = "";
  document.getElementById("desempenho").innerHTML = "";

  document.getElementById("registrar").disabled = true;
}

// Função que realiza os cálculos de somas e médias
function calculos() {
  const total_veiculos = array_veiculos.length;

  for (let i = 0; i < total_veiculos; i++) {
    total_combustivel += array_veiculos[i].combustivel;
    total_km += array_veiculos[i].quilometros;
    total_dsp += array_veiculos[i].desempenho;
  }

  media_comb = total_combustivel / total_veiculos;
  media_km = total_km / total_veiculos;
  media_dsp = total_dsp / total_veiculos;


  let resultadoFinal = document.getElementById("resultados-finais");

  let p_TotalCombustivel = document.createElement("p");
  let p_TotalQuilometros = document.createElement("p");
  let p_MediaConsumoCombustivel = document.createElement("p");
  let p_MediaQuilometrosRodados = document.createElement("p");
  let p_MediaDesempenho = document.createElement("p");

  p_TotalCombustivel.innerHTML = `= Quantidade total de combustível utilizada: ${total_combustivel.toFixed(2)}`;
  p_TotalQuilometros.innerHTML = `= Quantidade total de quilômetros rodados: ${total_km.toFixed(2)}`;
  p_MediaConsumoCombustivel.innerHTML = `= Média de consumo de combustível: ${media_comb.toFixed(2)}`;
  p_MediaQuilometrosRodados.innerHTML = `= Média de quilômetros rodados: ${media_km.toFixed(2)}`;
  p_MediaDesempenho.innerHTML = `= Média de desempenho em quilômetros por litro (km/l): ${media_dsp.toFixed(2)}`;

  resultadoFinal.appendChild(p_TotalCombustivel);
  resultadoFinal.appendChild(p_TotalQuilometros);
  resultadoFinal.appendChild(p_MediaConsumoCombustivel);
  resultadoFinal.appendChild(p_MediaQuilometrosRodados);
  resultadoFinal.appendChild(p_MediaDesempenho);

}

// Função para finalizar o cadastro e exibir o relatório
function finalizar() {
  document.getElementById("quantidade_combustivel").disabled = true;
  document.getElementById("quantidade_quilometros").disabled = true;
  document.getElementById("salvar").disabled = true;
  document.getElementById("registrar").disabled = true;
  document.getElementById("btn-finish").disabled = true;

  calculos();
}

function validarSalvarVeiculo() {
  if (
    document.getElementById("quantidade_combustivel").value !== "" ||
    document.getElementById("quantidade_quilometros").value !== ""
  ) {
    document.getElementById("salvar").disabled = false;
  }
}

// Função para limpar todos os inputs, textos e veículos salvos no array
function limpar() {
  if (document.getElementById("quantidade_combustivel").value !== "") {
    document.veiculos.quantidade_combustivel.value = "";
  }

  if (document.getElementById("quantidade_quilometros").value !== "") {
    document.veiculos.quantidade_quilometros.value = "";
  }

  if (document.getElementById("desempenho").value !== "") {
    document.getElementById("desempenho").innerHTML = "";
  }

  if (array_veiculos.length > 0) {
    array_veiculos = [];
  }

  total_combustivel = 0;
  total_km = 0;
  total_dsp = 0;
  media_comb = 0;
  media_km = 0;
  media_dsp = 0;
  combustivel = 0;
  quilometros = 0;
  desempenho = 0;

  const myNode = document.getElementById("resultados-finais");
  if (myNode.childElementCount > 0) {
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }
    registrarVeiculo();
  }
}


