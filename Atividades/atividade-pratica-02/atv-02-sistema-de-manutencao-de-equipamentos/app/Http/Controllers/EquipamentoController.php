<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Equipamento;
use Illuminate\Http\Request;

class EquipamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $equipamentos = Equipamento::orderBy('nome')->get();
        return view('equipamentos.index', ['equipamentos' => $equipamentos]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::check()) {
            return view('equipamentos.create');
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Equipamento::create($request->all());
        session()->flash('mensagem', 'Equipamento cadastrado com sucesso');
        return redirect()->route('equipamentos.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Equipamento  $equipamento
     * @return \Illuminate\Http\Response
     */
    public function show(Equipamento $equipamento)
    {
        return view('equipamentos.show', ['equipamento' => $equipamento]);
    }

    public function relatorio()
    {
        if (Auth::check()) {
            $equipamentos = Equipamento::orderBy('nome')->get();
            return view('equipamentos.relatorio', ['equipamentos' => $equipamentos]);
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Equipamento  $equipamento
     * @return \Illuminate\Http\Response
     */
    public function edit(Equipamento $equipamento)
    {
        if (Auth::check()) {
            return view('equipamentos.edit', ['equipamento' => $equipamento]);
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Equipamento  $equipamento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Equipamento $equipamento)
    {
        $equipamento->fill($request->all());
        $equipamento->save();

        session()->flash('mensagem', 'Equipamento atualizado com sucesso');

        return redirect()->route('equipamentos.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Equipamento  $equipamento
     * @return \Illuminate\Http\Response
     */
    public function destroy(Equipamento $equipamento)
    {
        if (Auth::check()) {
            if ($equipamento->registros->count() > 0) {
                session()->flash('erro', 'Exclusão não permitida! Existem registros associados');
            } else {
                $equipamento->delete();
                session()->flash('mensagem', 'Equipamento excluido com sucesso');
            }

            return redirect()->route('equipamentos.index');
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }
}
