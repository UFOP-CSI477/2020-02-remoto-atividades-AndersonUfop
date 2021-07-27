@extends('principal')

@section('conteudo')

<div class="container-fluid">


    <h1>Dados da pessoa</h1>

    <p class="font-weight-bold">ID:</p>
    <p>{{ $pessoa->id}}</p>
    <p class="font-weight-bold">Nome da pessoa:</p>
    <p>{{ $pessoa->nome}}</p>
    <p class="font-weight-bold">Cidade:</p>
    <p>{{ $pessoa->cidade_id}}</p>


    <a href="{{ route('pessoas.edit', $pessoa->id)}}" style="text-decoration: none;">
        <button type="button" class="btn btn-success">
            Editar
        </button>
    </a>

    <a href="{{route('pessoas.index')}}" style="text-decoration: none;">
        <button type="button" class="btn btn-dark">
            &larr; Voltar
        </button>
    </a>

    <form name="frDelete" action="{{ route('pessoas.destroy', $pessoa->id)}}" method="post" onsubmit="return confirm('Confirma a exclusão da pessoa?')">

        @csrf
        @method('DELETE')

        <input type="submit" class="btn btn-danger mt-2" value="Excluir">

    </form>

</div>

@endsection
