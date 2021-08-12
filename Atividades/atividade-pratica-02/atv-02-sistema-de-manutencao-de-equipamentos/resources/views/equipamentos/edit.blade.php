@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="title">
            <h1>Editar Equipamento</h1>
            <span>Insira as informações necessárias</span>
        </div>

        <form action="{{ route('equipamentos.update', $equipamento->id) }}" method="post">

            @csrf
            @method('PUT')

            <div class="col">
                <label for="nome">Nome do equipamento</label>
                <input type="text" class="form-control" name="nome" id="nome" value="{{ $equipamento->nome }}">
            </div>

            <div class="button-submit">
                <input type="submit" value="Alterar" class="btnSalvar">
            </div>
        </form>

    </div>
</div>

@endsection
