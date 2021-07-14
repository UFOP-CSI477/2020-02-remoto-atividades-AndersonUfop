<!DOCTYPE html>
<html lang="pt">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

  <title>Validação PHP</title>

  <script src="validacao.js"></script>
</head>

<body>
  <div class="container">
    <p class="h1 mt-4 text-primary">Dados pessoais</h1>

    <form name="formDados" action="validar.php" method="post">
      <div class="row mt-4">
        <div class="col-md-6">
          <label for="name" id="label1">Nome:</label>
          <input type="text" name="nome" id="nome" class="form-control">
          <div id="alerta1" class="alert alert-danger" style="display: none">
            <span>Preencha um nome válido!</span>
          </div>
        </div>

        <div class="col-md-6">
          <label for="name" id="label2">Sobrenome:</label>
          <input type="text" name="sobrenome" id="sobrenome" class="form-control">
          <div id="alerta2" class="alert alert-danger" style="display: none">
            <span>Preencha um sobrenome válido!</span>
          </div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-md-2">
          <label for="idade" id="label3">Idade:</label>
          <input type="text" name="idade" id="idade" class="form-control">
          <div id="alerta3" class="alert alert-danger" style="display: none">
            <span>Preencha o campo idade corretamente!</span>
          </div>
        </div>

        <div class="col-md-6">
          <label for="name" id="label4">Endereço:</label>
          <input type="text" name="endereco" id="endereco" class="form-control">
          <div id="alerta4" class="alert alert-danger" style="display: none">
            <span>Preencha o campo endereço corretamente!</span>
          </div>
        </div>

        <div class="col-md-4">
          <label for="telefone" id="label5">Telefone</label>
          <input type="text" name="telefone" id="telefone" class="form-control">
          <div id="alerta5" class="alert alert-danger" style="display: none">
            <span>Preencha o campo telefone corretamente!</span>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <input type="submit" value="Salvar" name="btnSalvar" onclick="salvar()" class="btn btn-dark">
        </div>
        
      </div>


      <div class="alert alert-success mt-4" id="sucesso" role="alert" style="display: none">
        Informações salvas com sucesso!
      </div>

  </div>
  </form>
  </div>
</body>

</html>