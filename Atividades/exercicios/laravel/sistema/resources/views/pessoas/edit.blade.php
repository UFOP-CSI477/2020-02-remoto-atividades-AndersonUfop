@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('pessoas.update', $pessoa->id) }}" method="post">

        @csrf
        @method('PUT')

        <div class="form-group row mt-4">

            <div class="col">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" name="nome" id="nome" value="{{ $pessoa->nome }}">
            </div>

            <div class="col">
                <label for="cidade_id">Cidade</label>
                <select name="cidade_id" id="cidade_id" class="form-control">

                    @foreach($cidades as $c)
                    <option value="{{$c->id}}" @if($pessoa->cidade_id == $c->id)
                        selected
                        @endif

                        >{{ $c->nome }}</option>
                    @endforeach

                </select>
            </div>

        </div>

        <div class="text-right">
            <input type="submit" value="Atualizar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-secondary">
        </div>

    </form>
</div>

@endsection
