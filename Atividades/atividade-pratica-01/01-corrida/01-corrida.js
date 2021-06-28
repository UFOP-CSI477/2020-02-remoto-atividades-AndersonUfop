let largada = 0;
let table_visible = false;
let table_resultado_visible = false;
var array = [];

function novosDados() {
  location.reload();
}

function salvarDados() {
  if (largada <= 6) {
    largada++;
    let nome = document.formCorrida.competidor.value;
    let tempo = Number(document.formCorrida.tempo.value);

    document.formCorrida.competidor.value = "";
    document.formCorrida.tempo.value = "";

    carregarTabela(largada, nome, tempo);
    console.log(largada, nome, tempo);

    array.push({ largada, nome, tempo });
  }

  if (largada >= 6) {
    document.getElementById("competidor").disabled = true;
    document.getElementById("tempo").disabled = true;
    document.getElementById("botaoAdicionar").disabled = true;

    console.log(array.length);
    array.sort(function ordenarCompetidores(a, b) {
      return a.tempo - b.tempo;
    });

    console.log(array);
    carregarResultado(array);

    document.getElementById("newInfos").style.display = "block";
    document.getElementById("newInfos").disabled = false;
  }
}

function carregarTabela(largada, nome, tempo) {
  if (!table_visible) {
    document.getElementById("table").style.display = "block";
  }
  let competidores = document.getElementById("divCompetidores");

  let tr = document.createElement("tr");
  let th_largada = document.createElement("th");
  let th_nome = document.createElement("th");
  let th_tempo = document.createElement("th");
  th_largada.innerHTML = largada;
  th_nome.innerHTML = nome;
  th_tempo.innerHTML = tempo;

  competidores.appendChild(tr);
  competidores.appendChild(th_largada);
  competidores.appendChild(th_nome);
  competidores.appendChild(th_tempo);
}

function carregarResultado(array) {
  console.log(array);
  if (!table_resultado_visible) {
    document.getElementById("tabela-resultado").style.display = "block";
  }

  let resultado = document.getElementById("ResultadoCorrida");

  let pos = 0;

  for (let i = 0; i < array.length; i++) {
    let tr = document.createElement("tr");
    let th_posicao = document.createElement("th");
    let th_largada = document.createElement("th");
    let th_competidor = document.createElement("th");
    let th_tempo = document.createElement("th");
    let th_resultado = document.createElement("th");

    if (i > 0 && array[i].tempo === array[i - 1].tempo) {
      pos = i;
      th_posicao.innerHTML = pos;
    } else {
      pos = i + 1;
      th_posicao.innerHTML = pos;
    }

    th_largada.innerHTML = array[i].largada;
    th_competidor.innerHTML = array[i].nome;
    th_tempo.innerHTML = array[i].tempo;

    if (pos === 1) {
      th_resultado.innerHTML = "Vencedor (a)";
    } else {
      th_resultado.innerHTML = " - ";
    }

    resultado.appendChild(tr);
    resultado.appendChild(th_posicao);
    resultado.appendChild(th_largada);
    resultado.appendChild(th_competidor);
    resultado.appendChild(th_tempo);
    resultado.appendChild(th_resultado);
  }
}
