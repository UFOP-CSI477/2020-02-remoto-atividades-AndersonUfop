@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="container">
            <div class="title">
                <h1>Nova manutenção</h1>
                <span>Insira as informações necessárias</span>
            </div>

            <form action="{{ route('manutencaos.store')}}" method="post">

                @csrf

                <div class="col">
                    <div class="row-2">
                        <label for="equipamento">Equipamento</label>
                        <select class="form-control" name="equipamento_id" id="equipamento">

                            @foreach($equipamentos as $e)
                            <option value="{{ $e->id}}">{{ $e->nome }} </option>
                            @endforeach

                        </select>
                    </div>

                    <div class="row-2">
                        <label for="usuario">Usuário</label>
                        <select class="form-control" name="user_id" id="usuario">

                            @foreach($usuarios as $u)
                            <option value="{{ $u->id}}">{{ $u->name }} </option>
                            @endforeach

                        </select>
                    </div>

                    <!-- <div class="row-2">
                        <label for="usuario">Usuário</label>
                        <select class="form-control" name="usuario" id="usuario">
                            @foreach($usuarios as $u)
                            <option value="{{ $u->id}}">{{ $u->name }} </option>
                            @endforeach
                    </div> -->




                    <div class="row-2">
                        <label for="descricao">Descrição</label>
                        <input type="text" class="form-control" name="descricao" id="descricao">
                    </div>

                    <div class="row-2">
                        <label for="datalimite">Data limite</label>
                        <input type="date" class="form-control" name="datalimite" id="data_limite">
                    </div>


                    <div class="row-2">
                        <label for="tipo">Tipo</label>
                        <select class="form-control" name="tipo" id="tipo">
                            <option value="Preventiva">Preventiva</option>
                            <option value="Corretiva">Corretiva</option>
                            <option value="Urgente">Urgente</option>
                        </select>
                    </div>

                    <div class="button-submit">
                        <input type="submit" value="Salvar" class="btnSalvar">
                    </div>
            </form>

        </div>
    </div>

    @endsection
