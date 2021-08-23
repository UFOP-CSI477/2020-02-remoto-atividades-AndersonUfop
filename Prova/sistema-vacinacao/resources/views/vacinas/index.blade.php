@extends('principal')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 m-3">Vacinas</h1>

    <button type="button" class="btn btn-primary my-3">Adicionar vacina</button>


    <table class="table table-striped">

        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Fabricante</th>
                <th scope="col">Doses</th>
                <th scope="col">Ver</th>
                <th scope="col">Editar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>

            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>

            </tr>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>

            </tr>
        </tbody>
    </table>
</div>


@endsection
