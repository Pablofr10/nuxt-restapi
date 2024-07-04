# REST API com Nuxt 3, Prisma e PostgreSQL

## Descrição

Este projeto é um tutorial que demonstra como criar uma REST API completa utilizando Nuxt 3, Prisma e PostgreSQL. O objetivo é ensinar a configurar um ambiente de desenvolvimento e construir um CRUD (Create, Read, Update, Delete) robusto e eficiente, abrangendo desde a configuração inicial até a implementação das rotas e modelos de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados:

- Node.js (versão 14 ou superior)
- PostgreSQL
- Yarn ou NPM

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2. Instale as dependências do projeto:

Com Yarn:

```bash
yarn install
```

Com NPM:

```bash
npm install
```

3. Configure o banco de dados PostgreSQL:

   - Crie um banco de dados no PostgreSQL.
   - Renomeie o arquivo `.env.example` para `.env` e atualize as variáveis de ambiente com suas credenciais do PostgreSQL.

```bash
DATABASE_URL="postgresql://usuário:senha@localhost:5432/nome-do-banco"
```

4. Execute as migrações do Prisma para configurar o banco de dados:

Com Yarn:

```bash
yarn prisma migrate dev
```

Com NPM:

```bash
npx prisma migrate dev
```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, use o comando:

Com Yarn:

```bash
yarn dev
```

Com NPM:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- `pages/`: Contém as páginas do Nuxt 3.
- `api/`: Contém as rotas da API.
- `prisma/`: Contém os esquemas do Prisma.

## Recursos Adicionais

- [Documentação do Nuxt 3](https://v3.nuxtjs.org/)
- [Documentação do Prisma](https://www.prisma.io/docs/)
- [Guia de Instalação do PostgreSQL](https://www.postgresql.org/docs/)

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork deste repositório, crie uma branch com sua feature ou correção de bug, e abra um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
