<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unidade extends Model
{
    protected $fillable = ['nome', 'bairro', 'cidade'];
    use HasFactory;

    public function registros() {
        return $this->hasMany(Registro::class);
    }
}
