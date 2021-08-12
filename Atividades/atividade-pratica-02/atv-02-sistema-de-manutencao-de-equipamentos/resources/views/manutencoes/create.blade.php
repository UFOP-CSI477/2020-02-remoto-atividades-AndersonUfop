@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="container">
            <div class="title">
                <h1>Nova manutenção</h1>
                <span>Insira as informações necessárias</span>
            </div>

            <form action="{{ route('equipamentos.store')}}" method="post">
                <div class="col">
                    <div class="row-2">
                        <label for="equipamento">Equipamento</label>
                        <select class="form-control" name="equipamento" id="equipamento">

                            @foreach($equipamentos as $e)
                            <option value="{{ $e->id}}">{{ $e->nome }} </option>
                            @endforeach

                        </select>
                    </div>

                    <div class="row-2">
                        <label for="usuario">Usuário</label>
                        <select class="form-control" name="usuario" id="usuario">
                        @foreach($usuarios as $u)
                        <option value="{{ $e->id}}">{{ $u->name }} </option>
                        @endforeach
                    </div>
                </div>

                <div class="col">
                    <div class="row-1">
                        <label for="descricao">Descrição</label>
                        <textarea name="descricao" id="descricao"></textarea>
                    </div>
                </div>

                <div class="col">
                    <div class="row-2">
                        <label for="data_limite">Data limite</label>
                        <input type="date" class="form-control" name="data_limite" id="data_limite">
                    </div>

                    <div class="row-2">
                        <label for="tipo">Tipo</label>
                        <input type="text" class="form-control" name="tipo" id="tipo">
                    </div>
                </div>

                <div class="button-submit">
                    <input type="submit" value="Salvar" class="btnSalvar">
                </div>
            </form>

        </div>
    </div>

    @endsection
