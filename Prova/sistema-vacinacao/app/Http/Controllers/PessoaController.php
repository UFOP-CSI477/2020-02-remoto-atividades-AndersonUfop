<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Pessoa;
use Illuminate\Http\Request;

class PessoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $pessoas = Pessoa::orderBy('nome')->get();
            return view('pessoas.index', ['pessoas' => $pessoas]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function edit(Pessoa $pessoa)
    {
        if (Auth::check()) {
            return view('pessoas.edit', ['pessoa' => $pessoa]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pessoa $pessoa)
    {
        $pessoa->fill($request->all());
        $pessoa->save();
        session()->flash('mensagem', 'Pessoa editada com sucesso.');


        return redirect()->route('pessoas.index');
    }

}
