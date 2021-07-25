@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('produtos.store') }}" method="post">

        @csrf

        <div class="form-group row mt-4">

            <div class="col">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" name="nome" id="nome" placeholder="Informe o nome do produto">
            </div>

            <div class="col">
                <label for="um">Unidade de medida</label>
                <input type="text" class="form-control" name="um" id="um" placeholder="Informe a unidade de medida do produto">
            </div>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-secondary">
        </div>

    </form>
</div>

@endsection
