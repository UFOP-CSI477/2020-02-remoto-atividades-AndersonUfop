@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                @foreach( $users as $u )
                <tr>
                    <td>{{ $u->name }}</td>
                    <td>{{ $u->email }}</td>

                </tr>
                @endforeach

            </tbody>
        </table>
    </div>
</div>


@endsection
