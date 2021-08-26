@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">


    <h1 class="h1 m-3">Registros</h1>

    <a href="{{route('registros.create')}}">
        <button type="button" class="btn btn-primary my-3">Adicionar registro</button>
    </a>

    <table class="table table-striped">

        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Pessoa</th>
                <th scope="col">Unidade</th>
                <th scope="col">Vacina</th>
                <th scope="col">Dose</th>
                <th scope="col">Data</th>
                <th scope="col"></th>

            </tr>
        </thead>
        <tbody>
            @foreach($registros as $r)
            <tr>
                <th scope="row">{{$r->id}}</th>
                <td>{{$r->pessoa->nome}}</td>
                <td>{{$r->unidade->nome}}</td>
                <td>{{$r->vacina->nome}}</td>
                <td>{{$r->dose}}</td>
                <td>{{\Carbon\Carbon::parse($r->data)->format('d/m/Y')}}</td>
                <td>
                    <form name="frDelete" action="{{route('registros.destroy', $r->id )}}" method="post" onSubmit="return confirm('Confirma a exclusão deste registro?')">
                        <a href="{{route('registros.show', $r->id)}}">
                            <button type="button" class="btn btn-primary">Visualizar</button>
                        </a>

                        <a href="{{route('registros.edit', $r->id)}}">
                            <button type="button" class="btn btn-success">Editar</button>
                        </a>



                        @csrf
                        @method("DELETE")

                        <button type="submit" class="btn btn-danger">Excluir</button>

                    </form>


                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>


@endsection
