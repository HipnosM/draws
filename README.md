# [Projeto de Exibição de Desenhos no Instagram](https://project-draws.vercel.app/)

Este é um projeto pessoal que utiliza React, Vite e a API de exibição básica do Instagram para apresentar postagens de desenhos autorais. O objetivo principal é criar uma interface dinâmica e responsiva para compartilhar criações artísticas.

![imagem do projeto draws](https://github.com/HipnosM/project-draws/assets/96494393/5e965a7a-6cb3-4da4-bb7c-54fcad20561f)

## Configuração da API

1. Crie uma conta de desenvolvedor no [site da Meta](https://developers.facebook.com/) e siga a documentação técnica para obter as credenciais necessárias.

2. Adicione suas credenciais no arquivo `.env`:
   ```env
   REACT_APP_INSTAGRAM_TOKEN=SUA_CHAVE_DE_ACESSO_AQUI
   ```

## Como Rodar o Projeto

Certifique-se de ter o Node.js instalado em seu ambiente.

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:
   ```bash
   npm install
   npm install react-icons
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Funcionalidades Principais
**Exibição Dinâmica:** As postagens do Instagram são exibidas dinamicamente na página, refletindo qualquer atualização em tempo real.

**Responsividade:** A interface foi desenvolvida com foco na adaptabilidade a diferentes tamanhos de tela.

**Ícone Personalizado do Instagram:** Utiliza o react-icons/io5 para exibir um ícone do Instagram personalizado.

## Utilização do react-icons/io5
Para exibir um ícone personalizado do Instagram, o projeto utiliza o componente FaInstagram dos react-icons/io5. A cor e o tamanho do ícone podem ser personalizados conforme necessário. Veja o exemplo no componente InstagramIcon no código-fonte do projeto.

## Contribuições
Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias, sinta-se à vontade para abrir uma "issue" ou enviar um "pull request".

## Licença
Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para utilizar, modificar e distribuir conforme necessário.
