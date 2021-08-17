@extends('principal')

@section('conteudo')

<div class="container">
    <div class="container">
        <a href="{{route('equipamentos.create')}}">
            <div class="button">
                <button type="button" class="btn-add">
                    Cadastrar equipamento
                </button>
            </div>
        </a>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do equipamento</th>
                    <th>Data de cadastro</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                @foreach($equipamentos as $e)
                <tr>
                    <td>{{$e->id}}</td>
                    <td>{{$e->nome}}</td>
                    <td>{{\Carbon\Carbon::parse($e->created_at)->format('d/m/Y')}}</td>
                    <td>
                        <a href="{{route('equipamentos.show', $e->id)}}">
                            <img src="{{ asset('assets/view.svg')}}" alt="">
                        </a>

                        <a href="{{route('equipamentos.edit', $e->id)}}">
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
