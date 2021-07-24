@extends('principal')

@section('conteudo')

<table class="table table-bordered table-hover table-striped">
      <thead class="thead">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Unidade de medida</th>
        </tr>
      </thead>
      <tbody>

        @foreach($produtos as $p)
        <tr>
          <th>{{ $p->id }}</th>
          <td>{{ $p->nome }}</td>
          <td>{{ $p->um }}</td>
        </tr>
        @endforeach
      </tbody>
    </table>

@endsection
