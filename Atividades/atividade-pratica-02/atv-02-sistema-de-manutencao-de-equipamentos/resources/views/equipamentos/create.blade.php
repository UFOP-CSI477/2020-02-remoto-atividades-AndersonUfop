@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <div class="title">
            <h1>Novo Equipamento</h1>
            <span>Insira as informações necessárias</span>
        </div>

        <form action="{{ route('equipamentos.store')}}" method="post">


        @csrf
            <div class="col">
                <label for="nome">Nome do equipamento</label>
                <input type="text" class="form-control" name="nome" id="nome">
            </div>

            <div class="button-submit">
                <input type="submit" value="Salvar" class="btnSalvar">
            </div>
        </form>

    </div>
</div>

@endsection
