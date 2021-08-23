# **CSI606-2020-02 - Remoto - Trabalho Final - Resultados**
## *Aluna(o): Anderson Fernandes Ferreira*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

Para o trabalho prático da disciplina foi desenvolvido um sistema web chamado "Onde Hospedar", que tem o objetivo principal a realização de reservas em hóteis, que possibilita o usuário encontrar um hotel, navegando pelo mapa que tem na página inicial, escolher o seu quarto e realizar sua reserva.

### 1. Funcionalidades implementadas

Foram implementadas as seguintes funcionalidades no sistema:

* Login no sistema
  
  * O usuário informará o seu e-mail e a sua senha.
    * Caso as credenciais estejam corretas, ele será redirecionado para a tela inicial do sistema.
    * Caso as credenciais estejam incorretas, exibirá uma mensagem de erro e ele deverá informar novamente.

  * Caso a pessoa não seja cadastrada, ela poderá realizar o seu cadastro.

* Cadastro de usuários
  * A pessoa deverá informar o seu nome, e-mail e criar uma senha.
    * Caso os dados estejam corretos, aparecerá uma mensagem de sucesso e ele já conseguirá logar no sistema.
    * Caso alguns destes dados não sejam válidos, aparecerá uma mensagem de erro e ele deverá informar corretamente.
    
* Busca de hóteis pelo mapa na página inicial
  * Na página inicial o usuário poderá navegar pelo mapa com o mouse, para aumentar e diminuir o zoom do mapa é só rolar o scroll do mouse.
  * Cada ponto que tem um hotel, haverá um marcador.
  * Clicando no marcador, será possível ver o nome do hotel.
  * Clicando no nome do hotel, abrirá uma página com detalhes sobre o hotel.

* Detalhes do hotel
  * Aparecerá as principais informações sobre o hotel, como nome, telefone, e-mail e localização.
  * Serão exibidas também imagens do hotel e serviços que ele oferece, como piscina, estacionamento, wifi e café da manhã.
  * Ao clicar em reservar agora, o usuário será redirecionado para a página de apertamentos.
* Reservar quarto
  * Nesta página o usuário poderá visualizar os quartos que estão disponíveis para reserva.
  * O usuário poderá utilizar filtros por tipo de quarto e serviços, para refinar as buscas pelos quartos.
  * O resultado da pesquisa será exibido abaixo, informando a quantidade de resultados encontrados e com os hotéis abaixo.
  * Em cada resultado da pesquisa será exibido ao lado o número do apartamento/quarto, seu preço, descrição e itens que tem nos quartos.
  * Se o quarto estiver indisponível, o botão aparecerá desabilitado e escrito RESERVADO.
  * Ao clicar em reservar, o usuário será redirecionado para a página de finalização da reserva.

* Realização de reserva
  * Exibirá as informações sobre a reserva no topo, como o nome do hotel e o apartamento.
  * O usuário deve informar a data de checkin e checkout, nome, e-mail, CPF e data de nascimento.
  * O nome e e-mail já vem preenchidos com o que está cadastrado no sistema, assim não será possível alterá-los.
  * Caso todas informações estejam preenchidas o usuário poderá clicar em confirmar.
    * O sistema irá acusar erro caso:
      * A data de checkin ou checkout seja uma data no passado.
      * A data de checkin seja após a data de checkout.
      * O usuário que realizar o cadastro tenha idade inferior a 18 anos.

    * Caso não ocorra erro, aparecerá uma mensagem de sucesso e o usuário será redirecionado para a página inicial.


<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->
  
### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->
Funcionalidades previstas e não implementadas:

* Buscar cidades e estados no mapa
  * Não foi implementada, pois não houve tempo.
* Visualização de imagens do hotel com o recurso de slideshow do React.
  * Tentei implementar, mas a biblioteca que utilizei não conseguia buscar as imagens da API.
* Um filtro não depender dos demais para realizar a busca.
  * Não consegui implementar uma query no typeorm que considerava apenas uma condição, sem depender da outra.

* Exibição de imagens dos quartos.
  * Como havia mais de uma imagem por quarto, precisa ter um array dentro do outro, mas dava erro na hora de carregar no frontend e não tive tempo para corrigir este erro, assim resolvi não implementar essa funcionalidade e deixar uma imagem fictícia.
* Realização do cálculo de preço total da reserva.
  * Não foi implementada, pois não houve tempo.
* Descrição do erro quando a idade for inferior a 18 anos ou a data de checkin for maior do que a de checkout.
  * Não foi implementada, pois não houve tempo.


### 3. Outras funcionalidades implementadas

Além das funcionalidades previstas no início do projeto, ainda foram implementadas as seguintes funcionalidades:

- Criação da área administrativa com as seguintes funcionalidades:
  
  - Visualização de hóteis cadastrados
  - Visualização de apartamentos cadastrados
  - Cadastro de hóteis
  - Cadastro de apartamentos

### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
Ao longo do desenvolvimento foram encontradas as seguintes dificuldades:
* Upload de imagens
* Criação das views
* Alinhamento dos elementos no CSS
* Utilização de bibliotecas que nunca utilizei no React
* Implementação do login no frontend
* Carregamento do mapa na página inicial
* Implementação dos filtros de busca de apartamentos
* Buscar dados de uma página e inserir em outra

Para superar as dificuldades eu utilizei muito da consulta em documentações de linguagens e bibliotecas que estavam sendo utilizadas, também percebi que algumas bibliotecas eram difíceis de ser implementadas e tive que mudar no meio do projeto.
Também consultei o Stack Overflow para ajudar a resolver alguns erros que davam no sistema, ao longo do desenvolvimento.
Algumas funcionalidades que eu não lembrava muito bem como implementar, consultei no cursa do GoStack e Ignite da Rocketseat, que eu já havia feito antes.


### 5. Instruções para instalação e execução

Para exacutar a aplicação deve ter instalado na máquina as seguintes ferramentas:
- Node + NPM
- Yarn
- Docker
- DBeaver
- Insomnia
- Visual Studio Code

Passo a passo para as instalações:

(As instações são baseadas em um ambiente Linux com distribuição Ubuntu)

**Node e NPM**
- Verifique se você tem o curl instaldo, rodando no terminal o comando:
```
curl --version
```
Caso ele retorne a versão, pode pular para o próximo passo. Caso não, basta rodar o comando:
```
sudo apt install curl
```
- Com o **curl** instalado execute a instalação da versão LTS mais rescente disponível:

```
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Feche o terminal e abra novamente para as alterações fazerem efeito.
- Por fim, execute os seguintes comandos no terminal:
```
node -v
npm -v
```

**Yarn**

Para instalar o Yarn, será necessário configurar o repositório **Yarn** executando:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
Instale utilizando o seguinte comando:
```
sudo apt update && sudo apt install yarn
```
Adicione o arquivo **~/.bashrc** (ou **~/.zshrc** caso você utilize o sheel zsh) a seguinte linha:
```
export PATH="$PATH:`yarn global bin`"
```
Feche e abra o terminal novamente, em seguida rode o comando:
```
yarn --version
```
Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

**Docker**

O Docker é uma forma de virtualizar aplicações no conceito de containers, que nos permite pular as etapas de configuração dos serviços da aplicação.

Para realizar a instalação do Docker, abra o terminal e execute os comandos abaixo:
```
sudo apt update
sudo apt remove docker docker-engine docker.io
sudo apt install docker.io
```
Com o Docker instaldo, vamos habilitar que o seu serviço seja iniciado automaticamente com o sistema:
```
sudo systemctl start docker
sudo systemctl enable docker
```
Para garantir que o Docker foi instalado de forma correta execute no terminal:
```
docker version
```
Para que você consiga executar o banco de dados da aplicação, deverá criar um container no docker, com o seguinte comando.
```
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Após isso será realizada a instalação do container e você poderá verificar se ele já está executando, com o comando:
```
docker ps
```
Caso não esteja em execução, execute:
```
docker start postgres
```
**DBeaver**

Vamos utilizar o DBeaver para visualizar o banco de dados.
Para instalar o DBeaver, acesse o seguinte [link](https://dbeaver.io/download/) e faça download.

Para configurar o banco de dados, vá em criar nova conexão, na barra de ferramentas do DBeaver no canto superior esquerdo.
Selecione **PostgreSQL** como database.
Na tela de seguinte preencha os seguintes campos com:
- Host: localhost
- Port: 5432
- Username: postgres
- Password: docker

Na aba PostgreSQL marque a opção 'Show all databases' e por fim clique em terminar.

Com a base de dados criado, crie o banco de dados da aplicação, clicando com o botão direito da base de dados, indo em criar e banco de dados.

O nome do banco de dados deverá ser **hotels_api**.

**Insomnia**
O Insomnia será utilizado para realizar as requisições no backend e também sera útil para rodar alguma funcionalidade que não foi implementada no frontend.
Para instalar o Insomnia, acesse este [link](https://insomnia.rest/download).

Para realizar uma requisição no isomnia, você deverá selecionar **Create** e ir em **Request Colletion** na página inicial e depois disso dar um nome a Colletion e clicar em create.

Na tela que será exibida, clique no botão mais ao lado de filter, canto esquerdo, clique em **New Request**, informe o nome da requisição e o método usado (GET, POST, PUT, etc.) e clique em create.

Digite a url da requisição e clique em send, após isso a requisição será realizada e poderá ter um retorno ou não.

**Visual Studio Code**

Para instalar o VS Code, basta acessar este [site](https://code.visualstudio.com/) e rodar o executável.

Com as ferramentas corretamente instaladas, vamos para a execução da aplicação:

- Faça um clone neste repositório, abrindo o terminal e rodando o seguinte comando:
```
git clone https://github.com/UFOP-CSI477/2020-02-remoto-atividades-AndersonUfop
```
- Acesse a pasta 2020-02-remoto-atividades-AndersonUfop, com o seguinte comando:
```
cd 2020-02-remoto-atividades-AndersonUfop
```
- Acesse o backend do projeto:
```
cd Projeto/backend
```
- Para acessar no VS Code, digite este comando:

```
code .
```
**Backend**

- Instale as dependências do projeto, rodando o comando `yarn` ou `npm install` no terminal, dentro da pasta backend.

- Após isso você deverá rodar as migrations do banco de dados, com o comando:
```
yarn typeorm migration:run
```
- Para ver se as tabelas foram criadas, abra o DBeaver e atualize o banco de dados, que você conseguirá visualizar as tabelas.

- Para iniciar a aplicação digite o comando `yarn dev`.

- Você poderá testar estas requisições no insomnia.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Hotel%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FUFOP-CSI477%2F2020-02-remoto-atividades-AndersonUfop%2Fmaster%2FProjeto%2Fbackend%2FInsomnia.json)


**Frontend**

- Acesse a pasta frontend e insatle as suas dependências, com o comando `yarn` ou `npm install`.
- Renomeie o arquivo `.env.example` para `.env`.
- Para rodar a aplicação, digite no terminal o comando `yarn start`.

Pronto, agora a aplicação já estará executando tanto o frontend quanto backend.


### 6. Referências

HOTEIS.COM. [S. l.], 2021. Disponível em: https://www.hoteis.com/. Acesso em: 10 jul. 2021.

AIRBNB. [S. l.], 2021. Disponível em: https://www.airbnb.com.br/. Acesso em: 10 jul. 2021.

 REACT Uma biblioteca JavaScript para criar interfaces de usuário. [S. l.], 2021. Disponível em: https://pt-br.reactjs.org/. Acesso em: 20 ago. 2021.

 DOCUMENTATION | Node.js. [S. l.], 2021. Disponível em: https://nodejs.org/en/docs/. Acesso em: 20 ago. 2021.

 TYPEORM. [S. l.], 2021. Disponível em: https://typeorm.io/#/. Acesso em: 20 ago. 2021.

 EXPRESS - Framework de aplicativo da Web Node.js. [S. l.], 2021. Disponível em: https://expressjs.com/pt-br/. Acesso em: 20 ago. 2021.

 DOCKER Documentation. [S. l.], 2021. Disponível em: https://docs.docker.com/. Acesso em: 20 ago. 2021.





