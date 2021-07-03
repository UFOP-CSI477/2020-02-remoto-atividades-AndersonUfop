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

    option.value = ispb;
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