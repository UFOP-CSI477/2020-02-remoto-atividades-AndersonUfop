@extends('principal')

@section('conteudo')

<div class="container">


    <form action="{{ route('cidades.update', $cidade->id) }}" method="post">

        @csrf
        @method('PUT')

        <div class="form-group row mt-4">

            <div class="col">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" name="nome" id="nome" value="{{ $cidade->nome }}">
            </div>

            <div class="col">
                <label for="estado_id">Estado</label>
                <select name="estado_id" id="estado_id" class="form-control">

                    @foreach($estados as $e)
                    <option value="{{$e->id}}" @if($cidade->estado_id == $e->id)
                        selected
                        @endif

                        >{{ $e->nome }}</option>
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
