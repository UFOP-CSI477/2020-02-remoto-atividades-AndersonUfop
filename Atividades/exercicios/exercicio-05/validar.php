<?php

$nome = $_POST['nome'];
$sobrenome = $_POST['sobrenome'];
$idade = $_POST['idade'];
$endereco = $_POST['endereco'];
$telefone = $_POST['telefone'];
?>

<html>
<title>Validação</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

<body class="mt-2 ml-2" style="padding-left: 10px; padding-right: 10px;">
  <h1 class="font-weight-bold text-success">Informações salvas com sucesso &#128512;</h1>
  <div class="border border-success rounded ">
    <strong>Nome: </strong> <span><?php echo $nome ?></span></br>
    <strong>Sobrenome: </strong><span><?php echo $sobrenome ?></span></br>
    <strong>Idade: </strong><span><?php echo $idade ?></span></br>
    <strong>Endereço: </strong> <span> <?php echo $endereco ?></span></br>
    <strong>Telefone: </strong> <span> <?php echo $telefone ?></span></br>
  </div>
</body>

</html>