<?php

use Illuminate\Support\Facades\Route;

use App\Models\Produto;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/produtos', function () {
    $produtos = Produto::all();

    return view('lista', ['dados' => $produtos]);
});

Route::get('/produtos/{id}', function($id) {

    $produto = Produto::findOrFail($id);

    if ($produto == null) {
        return "ID Inválido";
    }

    return view('lista', ['dados' => $produto]);
});
