# API Papelaria

Uma API REST simples e eficiente para gerenciamento de produtos de uma papelaria, desenvolvida com **Node.js**, **Express** e **TypeScript**.  
Os dados são armazenados apenas em memória, utilizando arrays, conforme proposto na atividade.

## 🚀 Começando

Estas instruções ajudam você a executar o projeto localmente para testes e demonstração.

## 📋 Pré-requisitos

Para rodar este projeto, você precisa ter instalado no seu ambiente:

- **Node.js**;
- **npm**;
- **TypeScript**;
- **Express**;
- **ts-node** ou compilação com `tsc`;
- **Postman** para testar as rotas da API.

## 🐧 Instalação no Linux

Instale as dependências do projeto:

```bash
npm install
```

Se precisar instalar Node.js:

```bash
sudo apt install nodejs npm
```

## 🍏 Instalação no macOS

Instale as dependências do projeto:

```bash
npm install
```

Se usar Homebrew:

```bash
brew install node
```

## 🪟 Instalação no Windows

Instale o Node.js pelo site oficial e depois rode:

```bash
npm install
```

***

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto no seu ambiente.

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Entre na pasta do projeto:

```bash
cd seu-repositorio
```

Instale as dependências:

```bash
npm install
```

***

## ⚙️ Como executar

Se o projeto estiver configurado com TypeScript em desenvolvimento:

```bash
npm run dev
```

Ou, se estiver compilado:

```bash
npm run build
npm start
```

***

## 📌 Rotas da API

A API trabalha com produtos de papelaria e possui as seguintes rotas:

### 1. Cadastrar produto
**POST** `/api/produtos`

Exemplo de body:

```json
{
  "id": 1,
  "nome": "Caderno Universitário",
  "preco": 25.90,
  "fabricante": {
    "nome": "Tilibra",
    "endereco": {
      "cidade": "Bauru",
      "pais": "Brasil"
    }
  }
}
```

### 2. Listar produtos
**GET** `/api/produtos`

Retorna todos os produtos cadastrados.

### 3. Buscar produto por ID
**GET** `/api/produtos/:id`

Exemplo:

```bash
GET /api/produtos/1
```

### 4. Atualizar produto
**PUT** `/api/produtos/:id`

Exemplo de body:

```json
{
  "nome": "Caderno Universitário Atualizado",
  "preco": 29.90,
  "fabricante": {
    "nome": "Tilibra Premium",
    "endereco": {
      "cidade": "Campinas",
      "pais": "Brasil"
    }
  }
}
```

### 5. Remover produto
**DELETE** `/api/produtos/:id`

Exemplo:

```bash
DELETE /api/produtos/1
```

***

## 🛠️ Tecnologias utilizadas

- **TypeScript** — tipagem estática;
- **Express** — framework para API HTTP;
- **Node.js** — ambiente de execução JavaScript;
- **JSON** — formato das requisições e respostas.

***

## ✒️ Autoria

**Matheus Nakagaki** — desenvolvimento inicial e implementação da API.

***

## 📄 Licença

Este projeto está licenciado sob a Licença GPL-3.0 — veja o arquivo **LICENSE** para mais detalhes.

***

## 🎁 Agradecimentos

Obrigado ao professor e à disciplina de Programação Web pela proposta da atividade e ao IFSP pelo aprendizado prático com APIs REST.