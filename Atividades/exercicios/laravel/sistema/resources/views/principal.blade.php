<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


  <title>Sistema de produtos</title>
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">

    <div class="collapse navbar-collapse justify-between" id="navbarText">

      <ul class="navbar-nav me-auto ms-2">

        <li class="nav-item">
          <a class="nav-link" href="{{route('principal')}}"> Home </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="{{route('produtos.index')}}"> Produtos </a>
        </li>

      </ul>

  </nav>

  @if(session('mensagem'))

    <div class="alert alert-success">
        {{ session('mensagem') }}
    </div>

  @endif

  @yield('conteudo')

</body>

</html>
