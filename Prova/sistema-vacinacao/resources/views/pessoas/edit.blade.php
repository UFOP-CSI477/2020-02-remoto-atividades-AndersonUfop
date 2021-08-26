@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Editar pessoa</h1>

    <form action="{{ route('pessoas.update', $pessoa->id )}}" method="post">

        @csrf
        @method('PUT')

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputNome">Nome</label>
                <input type="text" name="nome" class="form-control" id="inputNome" value="{{ $pessoa->nome }}" placeholder="Nome">
            </div>
            <div class="form-group col-md-6">
                <label for="inputBairro">Bairro</label>
                <input type="text" name="bairro" class="form-control" id="inputBairro" value="{{ $pessoa->bairro }}" placeholder="Bairro">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCidade">Cidade</label>
                <input type="text" name="cidade" class="form-control" id="inputCidade" value="{{ $pessoa->cidade }}" placeholder="Cidade">
            </div>
            <div class="form-group col-md-6">
                <label for="inputDataNascimento">Data de nascimento</label>
                <input type="date" name="data_nascimento" class="form-control" id="inputDataNascimento" value="{{ $pessoa->data_nascimento }}" placeholder="Data de nascimento">
            </div>
        </div>

        <button type="submit" class="btn btn-primary my-3">Salvar</button>
    </form>



</div>


@endsection
