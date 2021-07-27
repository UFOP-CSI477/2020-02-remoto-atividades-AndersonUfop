@extends('principal')

@section('conteudo')

<div class="container-fluid">


    <h1>Dados do estado</h1>

    <p class="font-weight-bold">ID:</p>
    <p>{{ $estado->id}}</p>
    <p class="font-weight-bold">Estado:</p>
    <p>{{ $estado->nome}}</p>
    <p class="font-weight-bold">Sigla:</p>
    <p>{{ $estado->sigla}}</p>


    <a href="{{ route('estados.edit', $estado->id)}}" style="text-decoration: none;">
        <button type="button" class="btn btn-success">
            Editar
        </button>
    </a>

    <a href="{{route('estados.index')}}" style="text-decoration: none;">
        <button type="button" class="btn btn-dark">
            &larr; Voltar
        </button>
    </a>

    <form name="frDelete"
        action="{{ route('estados.destroy', $estado->id)}}"
        method="post"
        onsubmit="return confirm('Confirma a exclusão do estado?')"
    >

    @csrf
    @method('DELETE')

    <input type="submit" class="btn btn-danger mt-2"value="Excluir">

    </form>

</div>

@endsection
