@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="container">
            <div class="title">
                <h1>Editar registro</h1>
                <span>Insira as informações necessárias</span>
            </div>

            <form action="{{ route('registros.update', $registro->id )}}" method="post">

                @csrf
                @method('PUT')

                <div class="col">
                    <div class="row-2">
                        <label for="equipamento">Equipamento</label>
                        <select class="form-control" name="equipamento_id" id="equipamento">

                            @foreach($equipamentos as $e)
                            <option value="{{ $e->id}}" @if($registro->equipamento_id == $e->id)
                                selected
                                @endif
                            >{{ $e->nome }}</option>
                            @endforeach

                        </select>
                    </div>

                    <div class="row-2">
                        <label for="usuario">Usuário</label>
                        <select class="form-control" name="user_id" id="usuario">

                            @foreach($users as $u)
                            <option value="{{ $u->id}}" @if($registro->user_id == $u->id)
                                selected
                                @endif
                            >{{ $u->name }}</option>
                            @endforeach

                        </select>
                    </div>

                    <div class="row-2">
                        <label for="descricao">Descrição</label>
                        <input type="text" class="form-control" name="descricao" id="descricao" value="{{ $registro->descricao }}">
                    </div>

                    <div class="row-2">
                        <label for="datalimite">Data limite</label>
                        <input type="date" class="form-control" name="datalimite" id="data_limite" value="{{ $registro->datalimite }}">
                    </div>


                    <div class="row-2">
                        <label for="tipo">Tipo</label>
                        <select class="form-control" name="tipo" id="tipo">
                            <option value="Preventiva" @if($registro->tipo == "Preventiva") selected @endif>Preventiva</option>
                            <option value="Corretiva" @if($registro->tipo == "Corretiva") selected @endif>Corretiva</option>
                            <option value="Urgente" @if($registro->tipo == "Urgente") selected @endif>Urgente</option>
                        </select>
                    </div>

                    <div class="button-submit">
                        <input type="submit" value="Salvar" class="btnSalvar">
                    </div>
            </form>

        </div>
    </div>

    @endsection
