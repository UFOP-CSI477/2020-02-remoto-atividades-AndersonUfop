<?php

namespace App\Models;

class Estado implements ModelInterface {

  private $id, $nome, $sigla;

  public function __construct($id, $nome, $sigla) {

    $this->id = $id;
    $this->nome = $nome;
    $this->sigla = $sigla;
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

  public function getSigla() {
    return $this->sigla;
  }
}