@extends('principal')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Editar pessoa</h1>

    <form method="post">

        @csrf
        @method('PUT')

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputNome">Nome</label>
                <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Nome">
            </div>
            <div class="form-group col-md-6">
                <label for="inputBairro">Bairro</label>
                <input type="text" name="bairro" class="form-control" id="inputBairro" placeholder="Bairro">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCidade">Cidade</label>
                <input type="text" name="cidade" class="form-control" id="inputCidade" placeholder="Cidade">
            </div>
            <div class="form-group col-md-6">
                <label for="inputDataNascimento">Data de nascimento</label>
                <input type="date" name="data_nascimento" class="form-control" id="inputDataNascimento" placeholder="Data de nascimento">
            </div>
        </div>
    </form>

    <button type="submit" class="btn btn-primary my-3">Salvar</button>

</div>


@endsection
