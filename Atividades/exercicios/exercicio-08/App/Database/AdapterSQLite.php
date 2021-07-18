<?php

namespace App\Database;

use PDO;

class AdapterSQLite implements AdapterInterface {

    private $connection;

    public function open() {
        $dbfile = "db/database.sqlite";
        $dbuser = "";
        $dbpassword = "";
        $dbhost = "";

        $strConnection = "sqlite:" . $dbfile;

        $this->connection = new PDO($strConnection, $dbuser, $dbpassword);
    }

    public function close() {
        $this->connection = null;

        return true;
        
    }

    public function get() {
        return $this->connection;
    }

}