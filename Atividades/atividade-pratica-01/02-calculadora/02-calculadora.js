let calculo = [];
let valueString = '';
let value = 0;
let functionoperator = '';
let result = 0;
let cont_operator = 0;

function capturarValor(num) {
  if (document.getElementById("display").value === '0' && num ==='0') {
  } else {
    valueString += num;
    document.getElementById("display").value = valueString;
  }
}

function operator(op) {
  if (cont_operator > 0) {
    calculo = [];
    value = Number(document.getElementById("display").value);
    calculo.push(value);
    calculo.push(op);
    document.getElementById("display").value = "";
    valueString = "";
  }

  else {
    value = Number(document.getElementById("display").value);
    calculo.push(value);
    calculo.push(op);
    valueString = '';
  }

}

function equal() {
  value = Number(document.getElementById("display").value);
  calculo.push(value);

  for (let i = 0; i < calculo.length; i++) {
    if (isNaN(calculo[i])) {
      if (calculo[i] === '+') {
        if (cont_operator === 0) {
          result += calculo[i - 1] + calculo[i + 1];

        } else if (cont_operator > 0) {
          result += calculo[i + 1];
        }

        cont_operator++;
      }

      if (calculo[i] === '-') {
        if (cont_operator === 0) {
          result += calculo[i - 1] - calculo[i + 1];

        } else {
          result += -calculo[i + 1];
        }
        cont_operator++;
      }

      if (calculo[i] === 'x') {
        if (cont_operator === 0) {
          result += calculo[i - 1] * calculo[i + 1];

        } else {
          result *= calculo[i + 1];
        }
        cont_operator++;
      }

      if (calculo[i] === '/') {
        if (cont_operator === 0) {
          result += calculo[i - 1] / calculo[i + 1];

        } else {
          result /= calculo[i + 1];
        }
        cont_operator++;
      }
    }
  }

  document.getElementById("display").value = result;

}

function raiz() {
  value = Number(valueString);
  result = Math.sqrt(value);
  document.getElementById("display").value = result;

}

function potencia() {
  value = Number(valueString);
  result = Math.pow(value, 2);
  document.getElementById("display").value = result;
}

function porcentagem() {
  let value_display = Number(document.getElementById("display").value);
  let percent = (value_display / 100);
  document.getElementById("display").value = percent;

}

function virgula() {
  valueString += '.';
  document.getElementById("display").value = valueString;
}

function limparVisor() {
  calculo = [];
  valueString = '';
  value = 0;
  functionoperator = '';
  result = 0;
  cont_operator = 0;

  document.getElementById("display").value = '0';

}
