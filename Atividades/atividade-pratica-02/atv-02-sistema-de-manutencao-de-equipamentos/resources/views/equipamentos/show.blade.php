@extends('principal')

@section('conteudo')

<div class="container">
    <h1 class="title-show">Equipamento</h1>
    <div class="body">
        <p>ID: {{ $equipamento->id }}</p>
        <p>Nome: {{ $equipamento->nome }}</p>
        <p>Data de cadastro: {{\Carbon\Carbon::parse($equipamento->created_at)->format('d/m/Y')}}</p>
    </div>
    <div class="buttons-container">
        <a href="{{ route('equipamentos.edit', $equipamento->id)}}">
            <button type="button" class="btn-editar">
                Editar
            </button>
        </a>

        <form
            name="frDelete"
            action="{{route('equipamentos.destroy', $equipamento->id)}}"
            method="post"
            onSubmit="return confirm('Confirma a exclusão deste equipamento?')"
        >

        @csrf
        @method('DELETE')

        <button type="submit" value="Excluir" class="btn-delete">
            Excluir
        </button>

    </div>
</div>

@endsection
