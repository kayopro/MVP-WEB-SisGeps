<p align="center">
    <img src="App/src/img/SisGeps_img.png" height="100px" alt="Descrição da Imagem">
</p>

<h1 align="center"> Sistema de Gerenciamento de Estoque para Supermercado</h1>

<h2> <p>&#128187 Equipe de Desenvolvimento</p> </h2> 

<table>
    <tr>
        <td>
            <div class="membro">
                <img src="App/src/img/diogo.jpg" alt="Diogo" height="100px">                
                <p>DIOGO GABRIEL ROSA SANTOS / 2022011185</p>                
                <a href="https://www.linkedin.com/in/diogogabriel-developer/" target="_blank">LinkedIn</a> -
                <a href="https://github.com/DiogoG-dev" target="_blank">GitHub</a>
            </div>
        </td>
        <td>
            <div class="membro">
                <img src="App/src/img/kayo.png" alt="Kayo" height="100px">
                <p>JOSÉ KAYO BEZERRA DA SILVA / 2022012638</p>
                <a href="https://www.linkedin.com/in/kayosilva/" target="_blank">LinkedIn</a> -
                <a href="https://github.com/kayopro" target="_blank">GitHub</a>
            </div>
        </td>
        <td>
            <div class="membro">
                <img src="App/src/img/matheus.jpg" alt="Matheus" height="100px">
                <p>MATHEUS FAUSE JÁCOME DE LINO / 2022011775</p>
                <a href="https://www.linkedin.com/in/matheus-jacome-lino/" target="_blank">LinkedIn</a> -
                <a href="https://github.com/mfjacome" target="_blank">GitHub</a>
            </div>
        </td>
    </tr>
</table>

<br>
<h2>Descrição</h2>
<p>Este é um MVP web em sua versão inicial, ele apresenta funcionalidades essenciais para atender às necessidades básicas dos usuários com o objetivo de automatizar e organizar os processos relacionados ao controle de estoque, compra e venda de produtos em um supermercado de bairro.</p>

<p> O presente Sistema de Gerenciamento de Estoque de Produtos de um Supermercado de Bairro foi idealizado como sendo uma solução para organizar, automatizar e aprimorar os processos relacionados ao controle de estoque, compra e venda de produtos em pequenos supermercados de bairro. </p>

<p> Nessa perspectiva, esta documentação será um facilitador para a construção, desenvolvimento e manutenção do sistema. Além disso, esse artefato nos fornece uma comunicação eficaz entre os membros da equipe e demais partes interessadas no projeto. </p> <br>


<h2>Páginas</h2>
A seguir apresentaremos as telas do SisGeps
<h3>Tela de Login</h3>
<section>
      <ul>
        <li>Esta tela tem o objetivo de efetuar o cadastro do usuário e possibilitar o acesso ao sistema.</li>        
      </ul>
    </section>    
<img src="App/src/img/Login.png" height="500px"/>

<br>
<h3>Tela da Lista de Produtos</h3>
<section>
      <ul>
        <li>Esta tela tem a função de Cadastrar, Editar e Excluir produtos. </li>        
      </ul>
    </section>    
<img src="App/src/img/tela_lista_de_produtos.png" height="400px"/><br>

<h3>Tela de Cadastro de Produtos</h3>
<section>
      <ul>
        <li>Esta tela tem a função de Cadastrar um novo produto no sistema</li>        
      </ul>
    </section>    
<img src="App/src/img/cadastro_produtos.png" height="265px"/><br>

<h2> <p>&#128204 Funcionalidades do projeto</p> </h2>

- `Funcionalidade 1`: Cadastrar usuários;
- `Funcionalidade 2`: Efetuar Login;
- `Funcionalidade 3`: Cadastrar produtos;
- `Funcionalidade 4`: Editar produtos cadastrados;
- `Funcionalidade 5`: Excluir produtos;

<br>
<h2>Estrutura do projeto</h2>

- `App/src`: Encontra-se todas as ramificações do projeto.
    - `./css`: Os padrões de espaçamento, tipo e tamanho da fonte, botões, em resumo a parte de design da página encontra-se aqui.
        - `./estoque.css`: Responsável por dar vida a tela de cadastro, ediçao e deleção dos produtos.
        - `./login.css`: Responsável por dar vida a tela de cadastro e login do usuário.
    - `./img`: Local onde estão armazenada todas as imagens que compõem o projeto.
    - `./js`: Diretório responsável por armazenar a parte lógica do sistema, ou seja, os scripts.
        - `./estoque.js`: Contém a lógica: `INICIALIZAÇÃO`, `CRIAÇÃO E CONEXÃO COM O LOCAL STORAGE` e `CRUD - CREATE READ UPDATE DELETE`.
        - `./login.js`: Contém a lógica: `CADASTRAR USUARIO`, `VERIFICAÇÃO DO NOME`, `VERIFICAÇÃO DE SENHAS`, `OBTEM OS DADOS DO LOCAL STORAGE E VERIFICA A EXISTENCIA DO EMAIL` e `VALIDAR USUARIO E REDIRECIONAR`.
    - `./pages`: Pages contém a estrutura principal da aplicação web.
        - `./estoque.html`: Contém os aspectos estruturais da página de estoque que se relaciona com outros diretórios por meio de:
            ```shell
            <link rel="stylesheet" href="../css/estoque.css">
            <script src="../js/estoque.js" defer></script>
            ``` 
        - `./login.html`:Contém os aspectos estruturais da página de login que se relaciona com outros diretórios por meio de:
            ```shell
            <link rel="stylesheet" href="../css/login.css">
            <script src="../js/login.js"></script>
            ``` 

<br>
<h2>Tecnologias Utilizadas</h2>

- `HTML`
- `CSS`
- `JavaScript`

<br>
<h2>Contribuições</h2>
Contribuições são bem-vindas!

<br>

1. Clone o repositório para o seu computador:
```shell
git clone https://github.com/UFCA-ADS/MPV-WEB.git
```
2. Crie uma branch:
```shell
git checkout -b feature/seu_nome
```
3. Commit após implementar sugestões:
```shell
git add nome_arquivo(s)
git status - Verifica quais arquivos estão para ser adicionados;
git commit -m "Descreva de forma objetiva a alteração" - Insere comentário na adição que irá para o repositório remoto;
git push origin nome_branch (feature/seu_nome)
```

Método: Acesse a interface do Github abra um Pull requests da branch que criou para branch main no qual será avaliado antes de ser mergeado.
- `Pull requests`
- `Review`
- `Merge`

<br>
<h2>Documentação Arquitetural</h2>
<p>Este documento apresenta o Modelo Arquitetural do MVP (Minimum Viable Product) Web para o Sistema de Gerenciamento de Estoque de Produtos de um Supermercado de Bairro, inspirado no C4 Model. O MVP é uma versão inicial do sistema que possui as funcionalidades essenciais para atender às necessidades básicas dos usuários com o objetivo de automatizar e organizar os processos relacionados ao controle de estoque, compra e venda de produtos em um supermercado de bairro. Neste contexto, nossa arquitetura é dividida em três níveis principais: contexto, contêineres e componentes, nosso modelo de arquitetura apresenta princípios de escalabilidade, modularidade e integração, o que nos promove a expansão e manutenção eficiente do sistema.</p>

<p>Para mais detalhes acesse a documentação completa por meio do seguinte link: <a href="https://drive.google.com/file/d/1-2FjTOpvWIVVTTDSRF4yiM7KQfmc3dot/view?usp=sharing"> Documentação Arquitetural do SisGeps</a></p>

<br>
<h2>Considerações Finais</h2>
<p>Por meio do desenvolvimento desse trabalho, conseguimos adquirir valiosas experiências que serão de grande auxílio em projetos futuros. O Desenvolvimento deste MVP Web não apenas resultou em uma solução robusta e intuitiva para o Sistema de Gerenciamento de Estoque para Supermercado (SisGeps), mas também enriqueceu nosso conhecimento, contribuindo para um aprimoramento contínuo em futuras empreitadas.</p>




