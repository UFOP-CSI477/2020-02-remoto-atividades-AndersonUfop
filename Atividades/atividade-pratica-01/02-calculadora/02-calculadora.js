let calculo = {
  n1: 0,
  n2: 0,
  funcaoCalcular: null
}

function atribuirEventos() {
  document.getElementById("value0").addEventListener("click", inserirNumero);
  document.getElementById("value1").addEventListener("click", inserirNumero);
  document.getElementById("value2").addEventListener("click", inserirNumero);
  document.getElementById("value3").addEventListener("click", inserirNumero);
  document.getElementById("value4").addEventListener("click", inserirNumero);
  document.getElementById("value5").addEventListener("click", inserirNumero);
  document.getElementById("value6").addEventListener("click", inserirNumero);
  document.getElementById("value7").addEventListener("click", inserirNumero);
  document.getElementById("value8").addEventListener("click", inserirNumero);
  document.getElementById("value9").addEventListener("click", inserirNumero);
}

window.addEventListener("load", function() {
  atribuirEventos()
})

function adicao(n1, n2) {
  return n1 + n2;
}

function subtracao(n1, n2) {
  return n1 - n2;
}


function multiplicacao(n1, n2) {
  return n1 * n2;
}

function divisao(n1, n2) {

  if (n2 === 0) {
    return "Não é possível dividir por 0";
  } else {
    return n1 / n2;
  }
  
}

function limparVisor() {
  inputResultado.value = "";

  calculo.n1 = 0;
  calculo.n2 = 0;
  calculo.funcaoCalcular = null;

}

function inserirNumero() {

  if (isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = event.target.textContent;
  } else {
    if (document.getElementById("display").value === 0) {
      document.getElementById("display").value = event.target.textContent;
    } else {
      document.getElementById("display").value += event.target.textContent;
    }
  }
}

function inserirPonto() {
  if (document.getElementById("display").value === "" || isNaN(document.getElementById("display").value)) {
    document.getElementById("display").value = "0.";
  } else if (!document.getElementById("display").value.includes(".")) {
    document.getElementById("display").value = document.getElementById("display").value + "."
  }
}



function calculate() {

  const calculate = Number(result);
  console.log(calculate);

}