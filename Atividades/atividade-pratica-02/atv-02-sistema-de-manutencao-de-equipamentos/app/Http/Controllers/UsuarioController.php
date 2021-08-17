<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $users = User::orderBy('name')->get();
            return view('usuarios.index', ['users' => $users]);
        } else {
            session()->flash('mensagem', 'Esta funcionalidade é exclusiva para os administradores. Caso você seja um administrador, faça login em sua conta. ');
        }
    }
}
