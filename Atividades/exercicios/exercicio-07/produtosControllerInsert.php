<?php

require 'connection.php';

require 'header.php';

$nome = $_POST['nome'];
$um = $_POST['um'];

if(empty($nome) || empty($um)) {
  echo '<div class="alert alert-danger" role="alert">
          Informe os dados corretamente!
        </div>';

  die('
    <a href="produtosViewInsert.php">
      <button type="button" class="btn btn-warning ml-2">
        Voltar
      </button>
    </a>'
  );
}

try {

  $connection->beginTransaction();
  $stmt = $connection->prepare("INSERT INTO produtos (nome, um) VALUES(:nome, :um)");

  $stmt->bindParam(':nome', $nome);
  $stmt->bindParam(':um', $um);

  $stmt->execute();

  $connection->commit();

  header('Location: index.php');
  exit();
} catch (Exception $e) {
  $connection->rollback();
  die("Erro ao inserir o produto: " .$e->getMessage());
}