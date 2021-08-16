@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <a href="{{route('registros.create')}}">
            <div class="button">
                <button type="button" class="btn-add">
                    Cadastrar manutenções
                </button>
            </div>
        </a>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Data limite</th>
                    <th>Nome do equipamento</th>
                    <th>Nome do usuário</th>
                    <th>Tipo de manutenção</th>
                    <th>Descrição da manutenção</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach($registros as $r)
                <tr>
                    <th>{{ $r->id }}</th>
                    <td>{{$r->datalimite}}</td>
                    <td>{{$r->equipamento->nome}}</td>
                    <td>{{$r->user->name}}</td>
                    <td>{{$r->tipo}}</td>
                    <td>{{$r->descricao}}</td>
                    <td>
                        <a href="{{route('registros.show', $r->id)}}">
                            <img src="{{ asset('assets/view.svg')}}" alt="">
                        </a>

                        <a href="{{route('registros.edit', $r->id)}}">
                            <img src="{{ asset('assets/edit.svg')}}" alt="">
                        </a>

                    </td>
                </tr>
                @endforeach

            </tbody>
        </table>
    </div>
</div>


@endsection
