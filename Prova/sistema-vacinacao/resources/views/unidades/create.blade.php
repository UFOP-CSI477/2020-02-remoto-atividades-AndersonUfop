@extends('principal')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Adicionar unidade</h1>

    <form method="post">

        @csrf


        <div class="form-group">
            <label for="inputNome">Nome</label>
            <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Nome">
        </div>


        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputBairro">Bairro</label>
                <input type="text" name="bairro" class="form-control" id="inputBairro" placeholder="Bairro">
            </div>

            <div class="form-group col-md-6">
                <label for="inputCidade">Cidade</label>
                <input type="text" name="cidade" class="form-control" id="inputCidade" placeholder="Cidade">
            </div>
        </div>
    </form>

    <button type="submit" class="btn btn-primary my-3">Salvar</button>

</div>


@endsection
