@extends('principal')

@section('conteudo')

<a href="{{ route('pessoas.create') }}">
    <button type="button" class="btn btn-primary mt-2 mb-2">
        Cadastrar
    </button>
</a>

<table class="table table-bordered table-hover table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cidade</th>
            <td></td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        @foreach($pessoas as $p)
        <tr>
            <th>{{ $p->id }}</th>
            <td>{{ $p->nome }}</td>
            <td>{{ $p->cidade->nome }}</td>
            <td>
                <a href="{{route('pessoas.show', $p->id)}}">
                    Exibir
                </a>
            </td>
            <td>
                <a href="{{route('pessoas.edit', $p->id)}}">
                    Editar
                </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
