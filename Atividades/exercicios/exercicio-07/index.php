<?php

require 'connection.php';

// Controller -> Model

$produtos = $connection->query("SELECT * FROM produtos");

// View

require 'produtosView.php';