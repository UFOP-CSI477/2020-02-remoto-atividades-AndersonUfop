<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


    <title>Sistema de produtos</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">

        <div class="collapse navbar-collapse justify-content-between" id="navbarText">

            <ul class="navbar-nav me-auto ms-2">

                <li class="nav-item">
                    <a class="nav-link" href="{{route('principal')}}"> Home </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{route('cidades.index')}}"> Cidades </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{route('estados.index')}}"> Estados </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{route('pessoas.index')}}"> Pessoas </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{route('produtos.index')}}"> Produtos </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{route('compras.index')}}"> Compras </a>
                </li>

                @guest
                @if (Route::has('login'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                </li>
                @endif

                @if (Route::has('register'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
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
                @endguest


            </ul>


    </nav>

    @if(session('mensagem'))

    <div class="alert alert-success">
        {{ session('mensagem') }}
    </div>

    @endif

    @if(session('error'))

    <div class="alert alert-danger">
        {{ session('error') }}
    </div>

    @endif

    @yield('conteudo')

</body>

</html>
