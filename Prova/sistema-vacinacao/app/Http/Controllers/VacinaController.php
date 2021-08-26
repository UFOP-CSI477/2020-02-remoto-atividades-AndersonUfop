<?php

namespace App\Http\Controllers;

use App\Models\Vacina;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class VacinaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $vacinas = Vacina::orderBy('nome')->get();
            return view('vacinas.index', ['vacinas' => $vacinas]);
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
            return view('vacinas.create');
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
        Vacina::create($request->all());
        session()->flash('mensagem', 'Vacina cadastrada com sucesso.');

        return redirect()->route('vacinas.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vacina  $vacina
     * @return \Illuminate\Http\Response
     */
    public function show(Vacina $vacina)
    {
        return view('vacinas.show', ['vacina' => $vacina]);
    }
}
