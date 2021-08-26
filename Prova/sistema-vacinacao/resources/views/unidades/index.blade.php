@extends('areaadministrativa')

@section('conteudo')

<div class="container-fluid">

    <h1 class="h1 m-3">Unidades</h1>

    <!-- <a href="{{route('unidades.create')}}">
        <button type="button" class="btn btn-primary my-3">Adicionar unidade</button>
    </a> -->

    <table class="table table-striped">

        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Bairro</th>
                <th scope="col">Cidade</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            @foreach($unidades as $u)
            <tr>
                <th scope="row">{{$u->id}}</th>
                <td>{{$u->nome}}</td>
                <td>{{$u->bairro}}</td>
                <td>{{$u->cidade}}</td>
                <td>
                    <form
                        name="frDelete"
                        action="{{ route('unidades.destroy', $u->id )}}"
                        method="post"
                        onsubmit="return confirm('Confirma a exclusão desta unidade?')"
                    >

                    @csrf
                    @method('DELETE')

                    <button type="submit" class="btn btn-danger">
                        Excluir
                    </button>

                    </form>
                </td>

            </tr>
            @endforeach
        </tbody>
    </table>
</div>


@endsection
