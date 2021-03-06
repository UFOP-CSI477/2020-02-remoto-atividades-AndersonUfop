@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('estados.update', $estado->id) }}" method="post">

        @csrf
        @method('PUT')

        <div class="form-group row mt-4">

            <div class="col">
                <label for="nome">Nome</label>
                <input
                    type="text"
                    class="form-control"
                    name="nome"
                    id="nome"
                    value="{{ $estado->nome }}">
            </div>

            <div class="col">
                <label for="sigla">Sigla</label>
                <input
                    type="text"
                    class="form-control"
                    name="sigla"
                    id="sigla"
                    value="{{ $estado->sigla }}"
                >
            </div>

        </div>

        <div class="text-right">
            <input type="submit" value="Atualizar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-secondary">
        </div>

    </form>
</div>

@endsection
