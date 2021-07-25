@extends('principal')

@section('conteudo')

<a href="{{ route('produtos.create') }}">
    <button type="button" class="btn btn-primary mt-2 mb-2">
        Cadastrar
    </button>
</a>

<table class="table table-bordered table-hover table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Unidade de medida</th>
            <td></td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        @foreach($produtos as $p)
        <tr>
            <th>{{ $p->id }}</th>
            <td>{{ $p->nome }}</td>
            <td>{{ $p->um }}</td>
            <td>
                <a href="{{route('produtos.show', $p->id)}}">
                    Exibir
                </a>
            </td>
            <td>
                <a href="{{route('produtos.edit', $p->id)}}">
                    Editar
                </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
