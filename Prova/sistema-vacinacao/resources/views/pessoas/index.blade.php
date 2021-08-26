@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">


    <h1 class="h1 m-3">Pessoas</h1>

   <!--  <a href="{{route('pessoas.create')}}">
        <button type="button" class="btn btn-primary my-3">Adiconar pessoa</button>
    </a> -->

    <table class="table table-striped">

        <thead>

            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Bairro</th>
                <th scope="col">Cidade</th>
                <th scope="col">Data de nascimento</th>
                <th scope="col"></th>

            </tr>

        </thead>
        <tbody>
            @foreach($pessoas as $p)
            <tr>
                <th scope="row">{{$p->id}}</th>
                <td>{{$p->nome}}</td>
                <td>{{$p->bairro}}</td>
                <td>{{$p->cidade}}</td>
                <td>{{\Carbon\Carbon::parse($p->data_nascimento)->format('d/m/Y')}}</td>
                <td>
                    <a href="{{route('pessoas.edit', $p->id) }}">
                        <button type="button" class="btn btn-info">Editar</button>
                    </a>
                </td>
            </tr>
            @endforeach

        </tbody>
    </table>
</div>


@endsection
