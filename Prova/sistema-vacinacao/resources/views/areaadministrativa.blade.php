@extends('header')

<body>
    <div class="container-fluid w-auto p-0">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="{{route('areaadm')}}">Home<span class="sr-only">(Página atual)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('areageral')}}">Área geral</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('vacinas.index')}}">Vacinas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('pessoas.index')}}">Pessoas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('unidades.index')}}">Unidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{route('registros.index')}}">Registros</a>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    @guest
                    @if (Route::has('login'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                    </li>
                    @endif

                    @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">{{ __('Registrar') }}</a>
                    </li>
                    @endif
                    @else
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }}
                        </a>

                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </li>
                </ul>
                    @endguest

                </ul>
            </div>
        </nav>

        @if(session('mensagem'))
        <div class="alert alert-success" role="alert">
            {{ session('mensagem') }}
        </div>
        @endif

        @if(session('erro'))
        <div class="alert alert-danger" role="alert">
            {{ session('erro') }}
        </div>
        @endif

        @yield('conteudo')



    </div>


</body>

</html>
