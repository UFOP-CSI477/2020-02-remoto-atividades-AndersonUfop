<?php

require '../vendor/autoload.php';

use App\Models\Estado;
use App\Database\Connection;
use App\Database\AdapterSQLite;

$estado = new Estado(1, "Minas Gerais", "MG");
// var_dump($estado);

$connection = new Connection(new AdapterSQLite());
// var_dump($connection);

$connection->getAdapter()->open();



$table_estados = $connection->getAdapter()->get()->query("SELECT * FROM estados");
$result_estados = $table_estados->fetchAll();

$table_produtos = $connection->getAdapter()->get()->query("SELECT * FROM produtos");
$result_produtos = $table_produtos->fetchAll();

require "../App/Views/header.php";

require "../App/Views/EstadosView.php";
echo "</br>";
require "../App/Views/ProdutosView.php";


$connection->getAdapter()->close();