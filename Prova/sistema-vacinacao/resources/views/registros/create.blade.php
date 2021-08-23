@extends('principal')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Adicionar registros</h1>

    <form method="post">

        @csrf

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputNomePessoa">Nome da pessoa</label>
                <input type="text" name="pessoa_id" class="form-control" id="inputNomePessoa" placeholder="Nome">
            </div>
            <div class="form-group col-md-4">
                <label for="inputUnidadeId">Unidade</label>
                <input type="text" name="unidade_id" class="form-control" id="inputUnidadeId" placeholder="Unidade">
            </div>
            <div class="form-group col-md-4">
                <label for="inputVacinaId">Vacina</label>
                <input type="text" name="vacina_id" class="form-control" id="inputVacinaId" placeholder="Vacina">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputDose">Dose</label>
                <input type="text" name="dose" class="form-control" id="inputDose" placeholder="Dose">
            </div>
            <div class="form-group col-md-6">
                <label for="inputData">Data</label>
                <input type="date" name="data" class="form-control" id="inputDate" placeholder="Data">
            </div>
        </div>
    </form>

    <button type="submit" class="btn btn-primary my-3">Salvar</button>

</div>


@endsection
