<?php

use Illuminate\Support\Facades\Route;

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

use App\Http\Controllers\PessoaController;
use App\Http\Controllers\RegistroController;
use App\Http\Controllers\UnidadeController;
use App\Http\Controllers\VacinaController;

Route::get('/', 'App\Http\Controllers\RegistroController@relatorio')->name('areageral');

Route::get('/adm', function () {
    return view('areaadministrativa');
})->name('areaadm')->middleware('auth');

Route::resource('/pessoas', PessoaController::class)->middleware('auth');
Route::resource('/registros', RegistroController::class)->middleware('auth');
Route::resource('/unidades', UnidadeController::class)->middleware('auth');
Route::resource('/vacinas', VacinaController::class)->middleware('auth');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
