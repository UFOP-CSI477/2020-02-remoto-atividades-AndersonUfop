@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Adicionar registros</h1>

    <form action="{{ route('registros.store') }}" method="post">

        @csrf

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="selectNomePessoa">Nome da pessoa</label>
                <select name="pessoa_id" class="form-control" id="selectNomePessoa" placeholder="Nome">
                    <option selected disabled>Selecione uma opção</option>

                    @foreach($pessoas as $p)
                    <option value="{{ $p->id}}"> {{ $p->nome }} </option>
                    @endforeach

                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="selectUnidadeId">Unidade</label>
                <select name="unidade_id" class="form-control" id="selectUnidadeId">
                    <option selected disabled>Selecione uma opção</option>

                    @foreach($unidades as $u)
                    <option value="{{ $u->id}}"> {{ $u->nome }} </option>
                    @endforeach

                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="selectVacinaId">Vacina</label>
                <select name="vacina_id" class="form-control" id="selectVacinaId">
                    <option selected disabled>Selecione uma opção</option>

                    @foreach($vacinas as $v)
                    <option value="{{ $v->id}}"> {{ $v->nome }} </option>
                    @endforeach

                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="selectDose">Dose</label>
                <select name="dose" class="form-control" id="selectDose">
                    <option selected disabled>Selecione uma opção</option>
                    <option value="0">Dose única</option>
                    <option value="1">Primeira Dose</option>
                    <option value="2">Segunda Dose</option>
                    <option value="3">Terceira Dose</option>
                </select>
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputData">Data</label>
                <input type="date" name="data" class="form-control" id="inputDate" placeholder="Data">
            </div>
        </div>

        <button type="submit" class="btn btn-primary my-3">Salvar</button>
    </form>



</div>


@endsection
