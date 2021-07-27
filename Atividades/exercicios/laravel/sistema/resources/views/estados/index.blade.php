@extends('principal')

@section('conteudo')

<a href="{{ route('estados.create') }}">
    <button type="button" class="btn btn-primary mt-2 mb-2">
        Cadastrar
    </button>
</a>

<table class="table table-bordered table-hover table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sigla</th>
            <td></td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        @foreach($estados as $e)
        <tr>
            <th>{{ $e->id }}</th>
            <td>{{ $e->nome }}</td>
            <td>{{ $e->sigla }}</td>
            <td>
                <a href="{{route('estados.show', $e->id)}}">
                    Exibir
                </a>
            </td>
            <td>
                <a href="{{route('estados.edit', $e->id)}}">
                    Editar
                </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
