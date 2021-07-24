<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">


  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">


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

  @yield('conteudo')

</body>

</html>
