@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="container">
            <div class="title">
                <h1>Editar manutenção</h1>
                <span>Insira as informações necessárias</span>
            </div>

            <form action="{{ route('equipamentos.store')}}" method="post">
                <div class="col">
                    <div class="row-2">
                        <label for="equipamento">Equipamento</label>
                        <input type="text" class="form-control" name="equipamento" id="equipamento">
                    </div>

                    <div class="row-2">
                        <label for="usuario">Usuário</label>
                        <input type="text" class="form-control" name="equipamento" id="equipamento">
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
