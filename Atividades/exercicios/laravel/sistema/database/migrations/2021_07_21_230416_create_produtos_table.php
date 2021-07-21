<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutosTable extends Migration
{
    public function up()
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 100)->nullable(false);
            $table->string('um', 3)->nullable(false);
            $table->timestamps();

        });
    }


    public function down()
    {
        Schema::dropIfExists('produtos');
    }
}
