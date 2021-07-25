@extends('principal')

@section('conteudo')

<div class="container-fluid">


    <h1>Dados do produto</h1>

    <p class="font-weight-bold">ID:</p>
    <p>{{ $produto->id}}</p>
    <p class="font-weight-bold">Nome do produto:</p>
    <p>{{ $produto->nome}}</p>
    <p class="font-weight-bold">Unidade de medida:</p>
    <p>{{ $produto->um}}</p>


    <a href="{{ route('produtos.edit', $produto->id)}}" style="text-decoration: none;">
        <button type="button" class="btn btn-success">
            Editar
        </button>
    </a>

    <a href="{{route('produtos.index')}}" style="text-decoration: none;">
        <button type="button" class="btn btn-dark">
            &larr; Voltar
        </button>
    </a>

    <form name="frDelete"
        action="{{ route('produtos.destroy', $produto->id)}}"
        method="post"
        onsubmit="return confirm('Confirma a exclusão do produto?')"
    >

    @csrf
    @method('DELETE')

    <input type="submit" class="btn btn-danger mt-2"value="Excluir">

    </form>

</div>

@endsection
