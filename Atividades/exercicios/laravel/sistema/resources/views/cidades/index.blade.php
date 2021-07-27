@extends('principal')

@section('conteudo')

<a href="{{ route('cidades.create') }}">
    <button type="button" class="btn btn-primary mt-2 mb-2">
        Cadastrar
    </button>
</a>

<table class="table table-bordered table-hover table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Estado</th>
            <td></td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        @foreach($cidades as $c)
        <tr>
            <th>{{ $c->id }}</th>
            <td>{{ $c->nome }}</td>
            <td>{{ $c->estado->nome }}</td>
            <td>
                <a href="{{route('cidades.show', $c->id)}}">
                    Exibir
                </a>
            </td>
            <td>
                <a href="{{route('cidades.edit', $c->id)}}">
                    Editar
                </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
