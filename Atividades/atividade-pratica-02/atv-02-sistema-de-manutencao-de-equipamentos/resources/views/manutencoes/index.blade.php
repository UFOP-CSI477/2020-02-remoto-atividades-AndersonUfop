@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <a href="{{route('manutencaos.create')}}">
            <div class="button">
                <button type="button" class="btn-add">
                    Cadastrar manutenções
                </button>
            </div>
        </a>
        <table class="table">
            <thead>
                <tr>
                    <th>Data limite</th>
                    <th>Nome do equipamento</th>
                    <th>Nome do usuário</th>
                    <th>Tipo de manutenção</th>
                    <th>Descrição da manutenção</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @foreach($manutencoes as $m)
                <tr>
                   <td>{{$m->datalimite}}</td>
                   <td>{{$m->equipamento->nome}}</td>
                   <td></td>
                   <td>{{$m->tipo}}</td>
                   <td>{{$m->descricao}}</td>
                    <td>
                        <img src="{{ asset('assets/view.svg')}}" alt="">

                        <img src="{{ asset('assets/edit.svg')}}" alt="">

                        <img src="{{ asset('assets/delete.svg')}}" alt="">
                    </td>
                </tr>
                @endforeach

            </tbody>
        </table>
    </div>
</div>


@endsection
