<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Registro;
use App\Models\Equipamento;
use App\Models\User;
use Illuminate\Http\Request;

class RegistroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $registros = Registro::orderby('equipamento_id')->get();
        return view('registros.index', ['registros' => $registros]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::check()) {
            $equipamentos = Equipamento::orderby('equipamento_id')->get();
            $users = User::orderby('name')->get();

            return view(
                'registros.create',
                [
                    'equipamentos' => $equipamentos,
                    'users' => $users
                ]
            );
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
        Registro::create($request->all());
        session()->flash('mensagem', 'Manutenção cadastrada com sucesso');
        return redirect()->route('registros.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function show(Registro $registro)
    {
        return view('registros.show', ['registro' => $registro]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function edit(Registro $registro)
    {
        if (Auth::check()) {
            $equipamentos = Equipamento::orderby('equipamento_id')->get();
            $users = User::orderby('name')->get();
            return view(
                'registros.edit',
                [
                    'registro' => $registro,
                    'equipamentos' => $equipamentos,
                    'users' => $users
                ]
            );
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Registro $registro)
    {

        $registro->fill($request->all());
        $registro->save();
        session()->flash('mensagem', 'Manutenção atualizada com sucesso');
        return redirect()->route('registros.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Registro  $registro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Registro $registro)
    {
        if (Auth::check()) {
            $registro->delete();
            session()->flash('mensagem', 'Manutenção excluida com sucesso');
            return redirect()->route('registros.index');
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
            return redirect()->route('login');
        }
    }
}
