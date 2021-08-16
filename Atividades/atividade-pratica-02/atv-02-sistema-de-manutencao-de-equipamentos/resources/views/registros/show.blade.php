@extends('principal')

@section('conteudo')

<div class="container">
    <h1 class="title-show">Manutenção</h1>
    <div class="body">
        <p>ID: {{ $registro->id }}</p>
        <p>Data limite: {{ $registro->datalimite }}</p>
        <p>Nome do equipamento: {{ $registro->equipamento->nome }}</p>
        <p>Nome do usuário: {{ $registro->user->name }}</p>
        <p>Tipo de manutenção: {{ $registro->tipo}} </p>
        <p>Descrição: {{ $registro->descricao }}</p>
    </div>
    <div class="buttons-container">
        <a href="{{ route('registros.edit', $registro->id)}}">
            <button type="button" class="btn-editar">
                Editar
            </button>
        </a>

        <form name="frDelete" action="{{route('registros.destroy', $registro->id)}}" method="post" onSubmit="return confirm('Confirma a exclusão desta manutenção?')">

            @csrf
            @method('DELETE')

            <button type="submit" value="Excluir" class="btn-delete">
                Excluir
            </button>

    </div>
</div>

@endsection
