@extends('principal')

@section('conteudo')

<div class="container-fluid">


    <h1>Dados da compra</h1>

    <p class="font-weight-bold">ID:</p>
    <p>{{ $compra->id}}</p>
    <p class="font-weight-bold">Nome da pessoa:</p>
    <p>{{ $compra->pessoa_id}}</p>
    <p class="font-weight-bold">Produto:</p>
    <p>{{ $compra->produto_id}}</p>


    <a href="{{ route('compras.edit', $compra->id)}}" style="text-decoration: none;">
        <button type="button" class="btn btn-success">
            Editar
        </button>
    </a>

    <a href="{{route('compras.index')}}" style="text-decoration: none;">
        <button type="button" class="btn btn-dark">
            &larr; Voltar
        </button>
    </a>

    <form name="frDelete"
        action="{{ route('compras.destroy', $compra->id)}}"
        method="post"
        onsubmit="return confirm('Confirma a exclusão da compra?')"
    >

    @csrf
    @method('DELETE')

    <input type="submit" class="btn btn-danger mt-2"value="Excluir">

    </form>

</div>

@endsection
