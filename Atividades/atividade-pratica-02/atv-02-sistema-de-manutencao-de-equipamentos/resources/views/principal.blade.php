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
        <div class="menu">
            <button class="button">
                Área geral
            </button>
            <div class="menu-content">
                <a href="{{route('equipamentos.index')}}">Lista de equipamentos</a>
                <a href="{{route('manutencaos.index')}}">Manutenções</a>
            </div>
        </div>

        <div class="menu">
            <button class="button">
                Área administrativa
            </button>
            <div class="menu-content">
                <a href="">Novo usuário</a>
                <a href="">Área do administrador</a>
                <a href="{{route('equipamentos.index')}}">Equipamentos</a>
                <a href="{{route('manutencaos.index')}}">Manutenções</a>
                <a href="">Relatório de usuários</a>
                <a href="">Relatório de manutenções</a>
            </div>
        </div>
    </div>

    @yield('conteudo')

</body>

</html>
