<?php

use Illuminate\Support\Facades\Route;

use App\Models\Equipamento;
use App\Http\Controllers\EquipamentoController;
use App\Http\Controllers\UsuarioController;
use App\Models\Registro;
use App\Http\Controllers\RegistroController;

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

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::get('/', function () {
    return view('principal');
})->name('principal');

Route::resource('/equipamentos', EquipamentoController::class);
Route::resource('/registros', RegistroController::class);
Route::resource('/usuarios', UsuarioController::class)->middleware('auth');

Route::get('/relatorio', 'App\Http\Controllers\EquipamentoController@relatorio')->name('equipamentos.relatorio');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
