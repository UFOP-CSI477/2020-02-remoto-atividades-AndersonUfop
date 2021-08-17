@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <h1>Relatório de manutenções</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do equipamento</th>
                    <th>Manutenções</th>
                    <th>Quantidade de registros</th>
                </tr>
            </thead>
            <tbody>

               @foreach($equipamentos as $e)

                <tr>
                    <td>{{$e->id}}</td>
                    <td>{{$e->nome}}</td>
                    @if ($e->registros->count() > 0)
                        <td>
                        @foreach($e->registros as $r )
                        {{$r->descricao}}  <br>
                        @endforeach
                        </td>
                        <td>
                            {{$e->registros->count()}}
                        </td>
                    @else
                    <td>Não há manutenções</td>
                    <td>0</td>
                    @endif


            @endforeach
            </tbody>
        </table>
    </div>
</div>

@endsection
