@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('compras.store') }}" method="post">

        @csrf

        <div class="form-group row mt-4">

            <div class="col">
                <label for="pessoa_id">Pessoa</label>
                <select name="pessoa_id" id="pessoa_id" class="form-control">

                    @foreach($pessoas as $p)
                    <option value="{{$p->id}}">{{ $p->nome }}</option>
                    @endforeach

                </select>
            </div>

            <div class="col">
                <label for="produto_id">Produto</label>
                <select name="produto_id" id="produto_id" class="form-control">

                    @foreach($produtos as $p)
                    <option value="{{$p->id}}">{{ $p->nome }}</option>
                    @endforeach

                </select>
            </div>

            <div class="col">
                <label for="data">Data</label>
                <input type="date" class="form-control" name="data" id="data">
            </div>

        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-secondary">
        </div>

    </form>
</div>

@endsection
