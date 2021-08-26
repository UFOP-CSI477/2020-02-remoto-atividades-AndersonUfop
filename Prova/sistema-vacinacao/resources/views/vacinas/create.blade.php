@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 my-3">Adicionar vacina</h1>

    <form action="{{ route('vacinas.store') }}" method="post" >

        @csrf

        <div class="row">
            <div class="form-group col-md-5">
                <label for="selectNome">Nome</label>
                <select name="nome" class="form-control" id="selectNome">
                    <option selected disabled>Selecione uma opção</option>
                    <option value="CoronaVac">CoronaVac</option>
                    <option value="AstraZeneca">AstraZeneca</option>
                    <option value="SpiN-Tec">SpiN-Tec</option>
                    <option value="Sputnik">Sputnik</option>
                    <option value="Janssen">Jassen</option>
                    <option value="Pfizer">Pfizer</option>
                    <option value="Moderna">Moderna</option>
                </select>
            </div>

            <div class="form-group col-md-5">
                <label for="selectFabricante">Fabricante</label>
                <select name="fabricante" class="form-control" id="selectFabricante">
                    <option selected disabled>Selecione uma opção</option>
                    <option value="Butantan">Butantan</option>
                    <option value="Oxford/FioCruz">Oxford/FioCruz</option>
                    <option value="BioNTech">BioNTech</option>
                    <option value="Moderna">Moderna</option>
                    <option value="Instituto Gamelaya">Instituto Gamelaya</option>
                    <option value="Jonhson & Jonhson">Johnson & Johnson</option>
                </select>
            </div>

            <div class="form-group col-md-2">
                <label for="inputDoses">Doses</label>
                <input type="number" name="doses" class="form-control" id="inputDoses" placeholder="Doses" min="1" max="3">
            </div>
        </div>

        <button type="submit" class="btn btn-primary my-3">Salvar</button>

    </form>



</div>


@endsection
