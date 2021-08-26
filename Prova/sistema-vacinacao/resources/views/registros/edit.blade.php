@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Editar registro</h1>

    <form action="{{ route('registros.update', $registro->id )}}" method="post">

        @csrf
        @method('PUT')

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="selectNomePessoa">Nome da pessoa</label>
                <select name="pessoa_id" class="form-control" id="selectNomePessoa" placeholder="Nome">
                    <option selected disabled>Selecione uma opção</option>

                    @foreach($pessoas as $p)
                    <option value="{{ $p->id}}" @if($registro->pessoa_id == $p->id)
                        selected
                        @endif

                        > {{ $p->nome }} </option>
                    @endforeach

                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="selectUnidadeId">Unidade</label>
                <select name="unidade_id" class="form-control" id="selectUnidadeId">
                    <option selected disabled>Selecione uma opção</option>

                    @foreach($unidades as $u)
                    <option value="{{ $u->id}}" @if($registro->unidade_id == $u->id)
                        selected
                        @endif

                        > {{ $u->nome }} </option>
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
                    <option value="{{ $v->id}}" @if($registro->vacina_id == $v->id)
                        selected
                        @endif

                        > {{ $v->nome }} </option>
                    @endforeach

                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="selectDose">Dose</label>
                <select name="dose" class="form-control" id="selectDose">
                    <option disabled>Selecione uma opção</option>
                    <option value="0" @if($registro->dose == 0) selected @endif>Dose única</option>
                    <option value="1"  @if($registro->dose == 1) selected @endif>1ª Dose</option>
                    <option value="2"  @if($registro->dose == 2) selected @endif>2ª Dose</option>
                    <option value="3"  @if($registro->dose == 3) selected @endif>3ª Dose</option>
                </select>
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md-4">
                <label for="inputData">Data</label>
                <input type="date" name="data" class="form-control" id="inputDate" placeholder="Data" value="{{ $registro->data }}">
            </div>
        </div>

        <button type="submit" class="btn btn-primary my-3">Salvar</button>
    </form>

</div>


@endsection
