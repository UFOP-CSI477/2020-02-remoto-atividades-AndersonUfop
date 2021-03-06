<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=], initial-scale=1.0">
    <title>Sistema de Manutenção de Equipamentos</title>
    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
</head>

<body>
    <div class="navbar">
        <div>
            <div class="menu">
                <button class="button">
                    Área geral
                </button>
                <div class="menu-content">
                    <a href="{{route('equipamentos.index')}}">Lista de equipamentos</a>
                    <a href="{{route('registros.index')}}">Manutenções</a>
                </div>
            </div>


            <div class="menu">
                <button class="button">
                    Área administrativa
                </button>
                <div class="menu-content">
                    <a href="{{route('equipamentos.index')}}">Equipamentos</a>
                    <a href="{{route('registros.index')}}">Manutenções</a>
                    <a href="{{route('usuarios.index')}}">Relatório de usuários</a>
                    <a href="{{route('equipamentos.relatorio')}}">Relatório de manutenções</a>
                </div>
            </div>
        </div>
        <div>
            @guest
            @if (Route::has('login'))
            <div class="menu">
                <a href="{{ route('login') }}">{{ __('Login') }}</a>
            </div>
            @endif

            @if (Route::has('register'))
            <div class="menu">
                <a href="{{ route('register') }}">{{ __('Registrar') }}</a>
            </div>
            @endif
            @else
            <div class="menu">
                <button class="button">
                    {{ Auth::user()->name }}
                </button>

                <div class="menu-content" aria-labelledby="navbarDropdown">
                    <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        {{ __('Logout') }}
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </div>
            </div>
            @endguest
        </div>
    </div>



    @if(session('mensagem'))
    <div class="message-alert">
        <span>{{ session('mensagem') }}</span>
    </div>
    @endif

    @if(session('erro'))
    <div class="message-error">
        <span>{{ session('erro') }}</span>
    </div>
    @endif

    @yield('conteudo')

</body>

</html>
