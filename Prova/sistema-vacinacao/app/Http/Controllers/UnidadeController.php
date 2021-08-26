<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Unidade;
use Illuminate\Http\Request;

class UnidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $unidades = Unidade::orderBy('nome')->get();
            return view('unidades.index', ['unidades' => $unidades]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Unidade  $unidade
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unidade $unidade)
    {
        if (Auth::check()) {
            if ($unidade->registros->count() > 0) {
                session()->flash('erro', 'Exclusão não permitida! Existem registros associados.');
            } else {
                $unidade->delete();
            }
            return redirect()->route('unidades.index');
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }
}
