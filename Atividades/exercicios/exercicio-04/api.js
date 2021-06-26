function limparSelect(campo) {
  while (campo.length > 1) {
    campo.remove(1);
  }
}

function preencherRegioes(data) {
  let regioes = document.getElementById("regioes");
  limparSelect(regioes);

  for (let index in data) {
    const { id, nome } = data[index];

    let option = document.createElement("option");

    option.value = id;
    option.innerHTML = nome;

    regioes.appendChild(option);
  }
}

function preencherEstados(data) {
  let estados = document.getElementById("estados");
  limparSelect(estados);

  for (let index in data) {
    const { id, nome } = data[index];

    let option = document.createElement("option");

    option.value = id;
    option.innerHTML = nome;

    estados.appendChild(option);
  }
}

function preencherMesorregioes(data) {
  let mesorregioes = document.getElementById("mesorregioes");
  limparSelect(mesorregioes);

  for (let index in data) {
    const { id, nome } = data[index];

    let option = document.createElement("option");

    option.value = id;
    option.innerHTML = nome;

    mesorregioes.appendChild(option);
  }
}

function preencherMunicipios(data) {
  let municipios = document.getElementById("municipios");
  limparSelect(municipios);

  for (let index in data) {
    const { id, nome } = data[index];

    let option = document.createElement("option");

    option.value = id;
    option.innerHTML = nome;

    municipios.appendChild(option);
  }
}

function carregarRegioes() {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then((response) => response.json())
    .then((data) => preencherRegioes(data))
    .catch((error) => console.error(error));
}

function carregarEstados() {
  const regioes = document.getElementById("regioes");
  const regiao_index = regioes.selectedIndex;
  const regiao_id = regioes.options[regiao_index].value;

  const estados = document.getElementById("estados");
  limparSelect(estados);

  if (regiao_id === "") {
    return;
  }

  const url_estados = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao_id}/estados`;

  fetch(url_estados)
    .then((response) => response.json())
    .then((data) => preencherEstados(data))
    .catch((error) => console.error(error));
}

function carregarMesorregioes() {
  const estados = document.getElementById("estados");
  const estado_index = estados.selectedIndex;
  const estado_id = estados.options[estado_index].value;

  const mesorregioes = document.getElementById("mesorregioes");
  limparSelect(mesorregioes);

  if (estado_id === "") {
    return;
  }

  const url_mesorregioes = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_id}/mesorregioes`;

  fetch(url_mesorregioes)
    .then((response) => response.json())
    .then((data) => preencherMesorregioes(data))
    .catch((error) => console.error(error));
}

function carregarMunicipios() {
  const mesorregioes = document.getElementById("mesorregioes");
  const mesorregiao_index = mesorregioes.selectedIndex;
  const mesorregiao_id = mesorregioes.options[mesorregiao_index].value;

  const municipios = document.getElementById("municipios");
  limparSelect(municipios);

  if (mesorregiao_id === "") {
    return;
  }

  const url_municipios = `https://servicodados.ibge.gov.br/api/v1/localidades/mesorregioes/${mesorregiao_id}/municipios`;
  fetch(url_municipios)
    .then((response) => response.json())
    .then((data) => preencherMunicipios(data))
    .catch((error) => console.error(error));
}
