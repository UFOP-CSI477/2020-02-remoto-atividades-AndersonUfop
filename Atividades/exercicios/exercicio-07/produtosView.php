
<?php
  require_once 'header.php';
?>

<body class="mt-4 ml-4 mr-4">
  <h1>Produtos</h1>
  <table class="table table-striped">
    <thead class="thead bg-dark text-light font-weight-bold">
      <tr>
        <td>ID</td>
        <td>Nome do produto</td>
        <td>Unidade de medida</td>
      </tr>
    </thead>
    <tbody>
      <?php 
        while ($index = $produtos->fetch()) {
          echo "<tr>";
          echo "<td>" . $index["id"] . "</td>";
          echo "<td>" . $index["nome"] . "</td>";
          echo "<td>" . $index["um"] . "</td>";
          echo "</tr>";
        }
      ?>
    </tbody>
  </table>
  <a href="produtosViewInsert.php">
    <button type="button" class="btn btn-primary">
      Adicionar produto
    </button>
  </a>
</body>