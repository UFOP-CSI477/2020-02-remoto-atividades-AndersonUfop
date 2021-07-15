
<?php
  require_once 'header.php';
?>

<body class="mt-2 ml-2">
  
  <form action="produtosControllerInsert.php" method="post">
    <div class="form-row">
      <div class="col-md-4">
        <label for="nome">Nome:</label>
        <input type="text" name="nome" class="form-control" id="nome">
      </div>

      <div class="col-md-4">
        <label for="um">Unidade de medida:</label>
        <input type="text" name="um" class="form-control" id="um">
      </div>
    </div>

    <input type="submit" value="Salvar" class="btn btn-primary mt-2">
    <input type="reset" value="Limpar" class="btn btn-warning mt-2">
    

  </form>

</body>
</html>