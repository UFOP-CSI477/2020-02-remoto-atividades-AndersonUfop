<!DOCTYPE html>
<html lang="en">

<?php
  require_once 'header.php';
?>

<body>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Sigla</th>
      </tr>
    </thead>
    <tbody>
    <?php
    while ($e = $estados->fetch()) {
      echo "<tr>";
      echo "<td>" . $e["id"] . "</td>";
      echo "<td>" . $e["nome"] . "</td>";
      echo "<td>" . $e["sigla"] . "</td>";
      echo "</tr>";
    }
    ?>
    </tbody>
  </table>

</body>

</html>