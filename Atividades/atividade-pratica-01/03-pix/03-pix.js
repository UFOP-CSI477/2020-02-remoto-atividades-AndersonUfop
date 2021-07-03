let transacoes = [];
let radio_tipoChave;
let radio_tipoOperacao;
let tipo_chave;
let saldoEnvio = 0;
let saldoRecebimento = 0;
let saldoTotal = 0;

function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function preencherSelect(data) {
  let bancos = document.getElementById("bancos");
  limparSelect(bancos);

  for (let index in data) {
    const { ispb, name } = data[index];

    let option = document.createElement("option");

    option.value = `${ispb} - ${name}`;
    option.innerHTML = name;

    bancos.appendChild(option);
  }
}

function carregarBancos() {
  fetch("https://brasilapi.com.br/api/banks/v1")
    .then((response) => response.json())
    .then((data) => preencherSelect(data))
    .catch((error) => console.error(error));
}

window.onload = function() {
  carregarBancos();
}

function carregarFormPix() {
  document.getElementById("details-pix").style.display = 'block';

  radio_tipoChave = document.getElementsByName("tipo");
  

  for (var i = 0 in radio_tipoChave) {
    if (radio_tipoChave[i].checked) {
      tipo_chave = radio_tipoChave[i].value;
    }
  }

  switch (tipo_chave) {
    case 'cpf':
      document.getElementById("valor_chave").innerHTML = "CPF:";
      break;
    case 'cnpj':
      document.getElementById("valor_chave").innerHTML = "CNPJ:";
      break;
    case 'email':
      document.getElementById("valor_chave").innerHTML = "E-mail:";
      break;
    case 'celular':
      document.getElementById("valor_chave").innerHTML = "Celular:";
      break;
    case 'aleatoria':
      document.getElementById("valor_chave").innerHTML = "Chave aleatória:";
      break;
    default:
      return;
  }

}

function salvarTransacao() {
  let chave = document.getElementById("valor-chave").value;
  let banco = document.getElementById("bancos").value;

  radio_tipoOperacao = document.getElementsByName("operacao");
  let tipo_operacao;

  for (var i = 0 in radio_tipoOperacao) {
    if (radio_tipoOperacao[i].checked) {
      tipo_operacao = radio_tipoOperacao[i].value;
    }
  }

  let valor_transacao = Number(document.getElementById("valor").value);
  let data_transacao = document.getElementById("data").value;

  if (chave !== '' && banco !== '' && tipo_operacao !== '' && valor_transacao !== null
      && data_transacao !== '') {

        transacoes.push({tipo_chave, chave, banco, tipo_operacao, valor_transacao, data_transacao});
        alert('Transação realizada com sucesso!');

        console.log(transacoes);
  
        document.getElementById("button-finalizar").style.display = "flex";

        document.getElementById("valor-chave").value = "";
        document.getElementById("bancos").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("data").value = "";

        for (var i = 0 in radio_tipoOperacao) {
          radio_tipoOperacao[i].checked = false; 
        }
  
  } else {
    alert('Erro ao realizar a transação! Por favor preencha todos os campos corretamente.')
  }

  
}

function desabilitarForm() {
  document.getElementById("valor-chave").value = "";
  document.getElementById("bancos").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("data").value = "";

  for (var i = 0 in radio_tipoOperacao) {
    radio_tipoOperacao[i].checked = false; 
  }
  document.getElementById("salvar").disabled = true;
  document.getElementById("finalizar").disabled = true;
  
  document.getElementById("valor-chave").disabled = true;
  document.getElementById("bancos").disabled = true;
  document.getElementById("valor").disabled = true;
  document.getElementById("data").disabled = true;
  document.getElementsByName("operacao").disabled = true;

  for (var i = 0 in radio_tipoOperacao) {
    radio_tipoOperacao[i].disabled = true; 
  }

  for (var i = 0 in radio_tipoChave) {
    radio_tipoChave[i].checked = false;
    radio_tipoChave[i].disabled = true;
  }
}

function calculos() {
  for (let i = 0; i < transacoes.length; i++) {
    if (transacoes[i].tipo_operacao === "Envio") {
     saldoEnvio += transacoes[i].valor_transacao;
    }
    if (transacoes[i].tipo_operacao === "Recebimento") {
      saldoRecebimento += transacoes[i].valor_transacao;
    }
  }
  saldoTotal = saldoRecebimento - saldoEnvio;

  document.getElementById("total-recebimento").innerHTML = `R$ ${saldoRecebimento.toFixed(2)}`;
  document.getElementById("total-envio").innerHTML = `R$ ${saldoEnvio.toFixed(2)}`;
  document.getElementById("final").innerHTML = `R$ ${saldoTotal.toFixed(2)}`;

}
  
function finalizarTransacao() {
  desabilitarForm();
  document.getElementById("resume").style.display = "block";
  calculos();

  document.getElementById("button-new-transactions").style.display = "flex";
}

function realizarNovasTransacoes() {

  if (transacoes.length > 0) {
    transacoes = [];
    saldoEnvio = 0;
    saldoRecebimento = 0;
    saldoTotal = 0;
  }

  document.getElementById("salvar").disabled = false;

  document.getElementById("finalizar").disabled = false;
  document.getElementById("button-finalizar").style.display = "none";
  
  document.getElementById("valor-chave").disabled = false;
  document.getElementById("bancos").disabled = false;
  document.getElementById("valor").disabled = false;
  document.getElementById("data").disabled = false;
  document.getElementsByName("operacao").disabled = false;
  document.getElementById("total-recebimento").innerHTML = `R$ 0,00`;
  document.getElementById("total-envio").innerHTML = `R$ 0,00`;
  document.getElementById("final").innerHTML = `R$ 0,00`;


  for (var i = 0 in radio_tipoOperacao) {
    radio_tipoOperacao[i].disabled = false; 
  }

  for (var i = 0 in radio_tipoChave) {
    radio_tipoChave[i].checked = false;
    radio_tipoChave[i].disabled = false;
  }

  document.getElementById("cpf").checked = true;

  document.getElementById("resume").style.display = "none";

  document.getElementById("button-new-transactions").style.display = "none";

  
}