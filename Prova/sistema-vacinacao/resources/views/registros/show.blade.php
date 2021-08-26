@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 m-3">Registro</h1>

    <p class="text-weight-bold">Pessoa:</p>
    <p class="text-monospace">{{$registro->pessoa->nome}}</p>

    <p class="text-weight-bold">Unidade:</p>
    <p class="text-monospace">{{$registro->unidade->nome}}</p>

    <p class="text-weight-bold">Vacina:</p>
    <p class="text-monospace">{{$registro->vacina->nome}}</p>

    <p class="text-weight-bold">Dose:</p>
    <p class="text-monospace">{{$registro->dose}}</p>

    <p class="text-weight-bold">Data:</p>
    <p class="text-monospace">{{\Carbon\Carbon::parse($registro->data)->format('d/m/Y')}}</p>

    <div class="row mx-2">
        <a href="{{ route('registros.edit', $registro->id)}}">
            <button type="button" class="btn btn-success mr-2">Editar</button>
        </a>

        <form name="frDelete" action="{{route('registros.destroy', $registro->id )}}" method="post" onSubmit="return confirm('Confirma a exclusão deste registro?')">

            @csrf
            @method("DELETE")

            <button type="submit" class="btn btn-dark">Excluir</button>

        </form>

    </div>
</div>


@endsection
