@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('estados.store') }}" method="post">

        @csrf

        <div class="form-group row mt-4">

            <div class="col">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" name="nome" id="nome">
            </div>

            <div class="col">
                <label for="sigla">Sigla</label>
                <input type="text" class="form-control" name="sigla" id="sigla">
            </div>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-secondary">
        </div>

    </form>
</div>

@endsection
