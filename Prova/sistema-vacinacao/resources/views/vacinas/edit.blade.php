@extends('principal')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Editar vacina</h1>

    <form method="post">

        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="inputNome">Nome</label>
            <input type="text" name="nome" class="form-control" id="inputNome" placeholder="Nome">
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputFabricante">Fabricante</label>
                <input type="text" name="fabricante" class="form-control" id="inputFabricante" placeholder="Fabricante">
            </div>

            <div class="form-group col-md-6">
                <label for="inputDoses">Doses</label>
                <input type="text" name="doses" class="form-control" id="inputDoses" placeholder="Doses">
            </div>
        </div>
    </form>

    <button type="submit" class="btn btn-primary my-3">Salvar</button>

</div>


@endsection
