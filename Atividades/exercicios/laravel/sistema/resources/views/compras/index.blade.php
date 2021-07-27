@extends('principal')

@section('conteudo')

<a href="{{ route('compras.create') }}">
    <button type="button" class="btn btn-primary mt-2 mb-2">
        Cadastrar
    </button>
</a>

<table class="table table-bordered table-hover table-striped">
    <thead class="thead">
        <tr>
            <th>ID</th>
            <th>Pessoa</th>
            <th>Produto</th>
            <th>Data</th>
            <td></td>
            <td></td>
        </tr>
    </thead>
    <tbody>

        @foreach($compras as $c)
        <tr>
            <th>{{ $c->id }}</th>
            <td>{{ $c->pessoa->nome }}</td>
            <td>{{ $c->produto->nome }}</td>
            <td>{{$c->data}}</td>
            <td>
                <a href="{{route('compras.show', $c->id)}}">
                    Exibir
                </a>
            </td>
            <td>
                <a href="{{route('compras.edit', $c->id)}}">
                    Editar
                </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>

@endsection
