@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 m-3">Vacinas</h1>

    <a href="{{route('vacinas.create')}}">
    <button type="button" class="btn btn-primary my-3">Adicionar vacina</button>
    </a>

    <table class="table table-striped">

        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Fabricante</th>
                <th scope="col">Doses</th>
            </tr>
        </thead>
        <tbody>
            @foreach($vacinas as $v)
            <tr>
                <td scope="row">{{$v->id}}</td>
                <td>{{$v->nome}}</td>
                <td>{{$v->fabricante}}</td>
                <td>{{$v->doses}}</td>

            </tr>
            @endforeach

            </tr>
        </tbody>
    </table>
</div>


@endsection
