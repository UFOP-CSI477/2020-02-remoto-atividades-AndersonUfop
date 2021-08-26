<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Models\Registro;
use App\Models\Pessoa;
use App\Models\Unidade;
use App\Models\Vacina;
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
        if (Auth::check()) {
            $registros = Registro::orderBy('id')->get();
            return view('registros.index', ['registros' => $registros]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::check()) {
            $pessoas = Pessoa::orderBy('name')->get();
            $unidades = Unidade::orderBy('name')->get();
            $vacinas = Vacina::orderBy('name')->get();

            return view('registros.create', [
                'pessoas' => $pessoas,
                'unidades' => $unidades,
                'vacinas' => $vacinas,
            ]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
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
        session()->flash('mensagem', 'Registro cadastrado com sucesso.');
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
        if (Auth::check()) {
            return view('registros.show', ['registro' => $registro]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
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
            $pessoas = Pessoa::orderBy('name')->get();
            $unidades = Unidade::orderBy('name')->get();
            $vacinas = Vacina::orderBy('name')->get();

            return view('registros.edit', [
                'registro' => $registro,
                'pessoas' => $pessoas,
                'unidades' => $unidades,
                'vacinas' => $vacinas,
            ]);
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
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
        session()->flash('mensagem', 'Registro atualizado com sucesso.');
        return redirect()->route('registros.index');
    }

    public function relatorio()
    {

        $registros = Registro::orderBy('dose')
            ->get();
        return view('registros.relatorio', ['registros' => $registros]);

        session()->flash('erro', 'Acesso restrito para administradores do sistema');
        return redirect()->route('login');
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
            session()->flash('mensagem', 'Registro excluido com sucesso.');
            return redirect()->route('registros.index');
        } else {
            session()->flash('erro', 'Acesso restrito para administradores do sistema');
            return redirect()->route('login');
        }
    }
}
