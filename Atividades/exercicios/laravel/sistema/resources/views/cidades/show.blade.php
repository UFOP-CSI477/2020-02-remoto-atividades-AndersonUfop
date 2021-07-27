@extends('principal')

@section('conteudo')

<div class="container-fluid">


    <h1>Dados da cidade</h1>

    <p class="font-weight-bold">ID:</p>
    <p>{{ $cidade->id}}</p>
    <p class="font-weight-bold">Nome da cidade:</p>
    <p>{{ $cidade->nome}}</p>
    <p class="font-weight-bold">Estado:</p>
    <p>{{ $cidade->estado_id}}</p>


    <a href="{{ route('cidades.edit', $cidade->id)}}" style="text-decoration: none;">
        <button type="button" class="btn btn-success">
            Editar
        </button>
    </a>

    <a href="{{route('cidades.index')}}" style="text-decoration: none;">
        <button type="button" class="btn btn-dark">
            &larr; Voltar
        </button>
    </a>

    <form name="frDelete"
        action="{{ route('cidades.destroy', $cidade->id)}}"
        method="post"
        onsubmit="return confirm('Confirma a exclusão da cidade?')"
    >

    @csrf
    @method('DELETE')

    <input type="submit" class="btn btn-danger mt-2"value="Excluir">

    </form>

</div>

@endsection
