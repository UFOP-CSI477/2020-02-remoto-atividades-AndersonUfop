@extends('areageral')

@section('conteudo')

<div class="container-fluid my-2">
    <div class="row">
        <div class="col-md-4">
            <h1>
                Total de vacinas aplicadas
            </h1>
            <table class="table table-striped">
                <?php
                $primeira = 0;
                $segunda = 0;
                $terceira = 0;
                $unica = 0;

                $astrazeneca = 0;
                $coronavac = 0;
                $janssen = 0;
                $pfizer = 0;

                foreach ($registros as $r) {
                    if ($r->dose == 1) {
                        $primeira++;
                    } else if ($r->dose == 2) {
                        $segunda++;
                    } else if ($r->dose == 3) {
                        $terceira++;
                    } else if ($r->dose == 0) {
                        $unica++;
                    }

                    if ($r->vacina->nome == 'AstraZeneca') {
                        $astrazeneca++;
                    } else if ($r->vacina->nome == 'CoronaVac') {
                        $coronavac++;
                    }
                    else if ($r->vacina->nome == 'Janssen') {
                        $janssen++;
                    }
                    else if ($r->vacina->nome == 'Pfizer') {
                        $pfizer++;
                    }
                }

                $total = $primeira + $segunda + $terceira + $unica;
                $total_vacinas = $astrazeneca + $coronavac + $janssen + $pfizer;

                ?>
                <thead>
                    <tr>
                        <th>Aplicação</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Primeira dose</td> <td>{{ $primeira }}</td>
                    </tr>
                    <tr>
                      <td>Segunda dose</td> <td>{{ $segunda }}</td>
                    </tr>
                    <tr>
                        <td>Terceira dose</td>  <td>{{ $terceira }}</td>
                    </tr>
                    <tr>
                        <td>Dose única</td> <td>{{ $unica }}</td>
                    </tr>
                    <tr>
                        <td>TOTAL GERAL</td> <td>{{$total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-4">
            <h1>Total de aplicações por vacina</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Vacina</th>
                        <th>Quantidade</th>
                        <th>Porcentagem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>AstraZeneca</td><td>{{ $astrazeneca }}</td>
                        <td>
                            {{ number_format(($astrazeneca/$total_vacinas)*100)}}%
                        </td>
                    </tr>
                    <tr>
                        <td>CoronaVac</td><td>{{ $coronavac }}</td>
                        <td>
                            {{ number_format(($coronavac/$total_vacinas)*100)}}%
                        </td>
                    </tr>
                    <tr>
                        <td>Janssen</td><td>{{ $janssen }}</td>
                        <td>
                            {{ number_format(($janssen/$total_vacinas)*100)}}%
                        </td>
                    </tr>
                    <tr>
                        <td>Pfizer</td><td>{{$pfizer}}</td>
                        <td>
                            {{ number_format(($pfizer/$total_vacinas)*100)}}%
                        </td>
                    </tr>
                    <tr>
                        <td>TOTAL GERAL</td><td>{{ $total_vacinas }}</td><td>100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection
