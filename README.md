<div align="center">
    <h1>Buscando informações de usuário no GitHub <img src='./public/images/github-logo-white.png' width="22.5" height="22.5"></h1>
    <p>Projeto que busca dados de um usuário através da API REST do GitHub.</p>
</div>

<div align="center">
    <img src='https://img.shields.io/static/v1?label=license&message=MIT&color=003377&style=flat'>
    <img src='https://img.shields.io/static/v1?label=lib&message=React&color=61DAFB&style=flat&logo=react'>
    <img src='https://img.shields.io/static/v1?label=lib&message=Axios&color=5A29E4&style=flat&logo=axios'>
    <img src='https://img.shields.io/static/v1?label=lib&message=React Hook Form&color=EC5990&style=flat&logo=reacthookform'>
    <img src='https://img.shields.io/static/v1?label=API&message=GitHub&color=181717&style=flat&logo=github'>
    <img src='https://img.shields.io/static/v1?label=version&message=1.0.0&color=981522&style=flat'>
    <img src='https://img.shields.io/static/v1?label=Vite&message=v6.0.5&color=646CFF&style=flat&logo=vite'>
</div>

<h4 align="center">Projeto finalizado 🎯</h4>

<h2>Tabela de conteúdos</h2>

<ul>
    <li><a href="#objetivo">Objetivo</a></li>
    <li><a href="#sobre">Sobre</a></li>
    <li><a href="#instalacao">Instalação</a></li>
    <li><a href="#como-usar">Como usar</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#o-que-aprendi">O que aprendi</a></li>
    <li><a href="#licenca">Licença</a></li>
    <li><a href="#autor">Autor</a></li>
</ul>

<h2 id="objetivo">Objetivo</h2>

<p>O objetivo deste projeto é aplicar os conhecimentos adquiridos sobre React, em especial o uso da biblioteca Axios para requisição em uma API. Adicionalmente, uso da biblioteca React Hook Form para validação básica do formulário.</p>

<h2 id="sobre">Sobre</h2>

<p>O projeto possui uma interface amigável, responsiva,  com um único campo de entrada, o qual deve receber um nome de usuário para ser pesquisado no GitHub. Como retorno, informações como foto, nome, biografia, quantidade de seguidores, pessoas seguidas e repositórios públicos, bem como o link para o perfil na plataforma.</p>
<p>Caso o perfil não possua nome e/ou biografia (são informações opcionais na plataforma), uma mensagem é exibida no lugar.</p>
<p>Caso o nome de usuário pesquisado não exista no GitHub, uma mensagem é exibida no lugar das informações.</p>
<p>Abaixo segue o funcionamento do projeto:</p>

<img src="./public/videos/project-demonstration.gif" alt="Demosntração do projeto">

<h2 id="instalacao">Instalação</h2>

<p>Caso seja do seu interesse rodar o projeto em sua máquina, tenha instalado o <a href="https://nodejs.org/pt" target="_blank">Node.js</a> e um ambiente de desenvolvimento (sugiro o Visual Studio Code - <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>). Abra o terminal e siga os passos abaixo</p>

<p>1 - Clone o repositório:</p>

```
git clone https://github.com/Hugo-Moreira91/fetch-username-api-github.git
```

<p>2 - Adentre o projeto:</p>

```
cd fetch-username-api-github
```

<p>3 - Instale as dependências</p>

```
npm install
```

<p>4 - Visualizar o código do projeto: (opcional)</p>

```
code .
```

<p>5 - Rodar o projeto:</p>

```
npm run dev
```

<h2 id="como-usar">Como usar</h2>

<p>Para usar é muito simples - insira um nome de usuário no campo de entrada e clique no botão "Pesquisar usuário".</p>
<p>Caso o usuário exista na plataforma do GitHub, algumas informações serão exibidas sobre ele: foto a esquerda, e a direita o seu nome (caso tenha definido), biografia (caso tenha definido), número de seguidores, pessoas seguindo e repositórios públicos. Por fim, um link que redireciona para o seu perfil no GitHub.</p>
<p>Caso o nome de usuário pesquisado não exista na plataforma do GitHub, a mensagem "Usuário não encontrado!" será retornada.</p>

<h2 id="tecnologias">Tecnologias</h2>

<p>As tecnologias utilizadas foram:</p>

<ul>
    <li><a href="https://react.dev/" target="_blank">React</a></li>
    <li><a href="https://vite.dev/" target="_blank">Vite</a></li>
    <li><a href="https://axios-http.com/ptbr/docs/intro" target="_blank">Axios</a></li>
    <li><a href="https://www.react-hook-form.com/" target="_blank">React Hook Form</a></li>
</ul>

<h2 id="o-que-aprendi">O que aprendi</h2>

<p>O principal foco desse projeto é o uso da biblioteca Axios. É uma biblioteca que facilita o processo de requisição a uma API. A partir da resposta (bem-sucedida) podemos extrair os dados principais, sem a preocupação de transformar dados brutos JSON em objetos JS. O Axios suporta os principais métodos na requisição, como GET, POST, PUT e DELETE.</p>
<p>Outro ponto a ser destacado no desenvolvimento do projeto foi a utilização do React Hook Form, outra bilbioteca que auxilia na validação de um formulário. Através dela, podemos definir campos obrigatórios, possíveis expressões regulares (regex), tamanhos máximos permitidos de dados inseridos e etc; em conjunto a essas definições personalizamos mensagens para cada uma, em caso de erro por parte do usuário.</p>

<h2 id="licenca">Licença</h2>

<p>A licença utilizada neste projeto é a MIT. Para mais informações, <a href="./LICENSE">clique aqui</a>.</p>

<h2 id="autor">Autor</h2>

<div style="display: flex; align-items: center; gap: 20px">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/129432443?s=400&u=ff3281ddf2cf31d4a71b01d46fcb4d8452398749&v=4" width="100" alt="Foto do autor">
    <h3><b>Hugo César</b></h3>
</div>
</br>
<p>Feito com ❤️ Entre em contato! 👋🏽</p>

[![Linkedin Badge](https://img.shields.io/badge/-Hugo%20César-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/)](https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/) 
[![Gmail Badge](https://img.shields.io/badge/-hugo.cesar91@gmail.com-c14438?style=flat&logo=Gmail&logoColor=white&link=mailto:hugo.cesar91@gmail.com)](mailto:hugo.cesar91@gmail.com)