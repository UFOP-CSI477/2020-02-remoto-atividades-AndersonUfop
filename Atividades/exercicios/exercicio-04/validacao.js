function validarTexto(campo, alerta, label) {

  let n = campo.value;

  if (n.length === 0 || n.length < 3 ) {
    document.getElementById(alerta).style.display = "block";

    campo.classList.add("is-invalid");

    document.getElementById(label).classList.add("text-danger");

    campo.value = "";
    campo.focus();
    return false;
  }

  document.getElementById(alerta).style.display = "none";
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  document.getElementById(label).classList.remove("text-danger");

  document.getElementById(label).classList.add("text-success");

  return true;

}

function validarIdade(campo, alerta, label) {
  let n = campo.value;

  if (n.length === 0 || isNaN( parseInt(n)) ) {
    document.getElementById(alerta).style.display = "block";

    campo.classList.add("is-invalid");

    document.getElementById(label).classList.add("text-danger");

    campo.value = "";
    campo.focus();
    return false;
  }

  document.getElementById(alerta).style.display = "none";
  campo.classList.remove("is-invalid");
  campo.classList.add("is-valid");

  document.getElementById(label).classList.remove("text-danger");

  document.getElementById(label).classList.add("text-success");

  return true;
}

function salvar() {
  let name = document.formDados.nome;
  let lastName = document.formDados.sobrenome;
  let age = document.formDados.idade;
  let address = document.formDados.endereco;
  let telephone = document.formDados.telefone;

  if (validarTexto(name, "alerta1", "label1")
    && (validarTexto(lastName, "alerta2", "label2")
    && (validarIdade(age, "alerta3", "label3"))
    && (validarTexto(address, "alerta4", "label4"))
    && validarTexto(telephone, "alerta5", "label5"))
  ) {
    console.log("Salvo com sucesso")
    document.getElementById("sucesso").style.display = "block";
  }
}