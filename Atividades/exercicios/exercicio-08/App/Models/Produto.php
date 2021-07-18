<?php

namespace App\Models;

class Produto implements ModelInterface {

  private $id, $nome, $um;

  public function __construct($id, $nome, $um) {

    $this->id = $id;
    $this->nome = $nome;
    $this->um = $um;
  }

  public function __destruct() {

  }

  public function getAll() {

  }

  public function get($id) {
    
  }

  public function getId() {
    return $this->id;
  }

  public function getNome() {
    return $this->nome;
  }

  public function getUm() {
    return $this->um;
  }
}