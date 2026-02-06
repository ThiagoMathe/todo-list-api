# 📝 ToDo List API (Node.js + TypeScript)

Este projeto é uma API RESTful para gerenciamento de tarefas (ToDo List), desenvolvida com foco em escalabilidade e boas práticas de código utilizando **Node.js** e **TypeScript**.

O objetivo é fornecer um backend sólido para operações de CRUD (Create, Read, Update, Delete) de tarefas.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript server-side.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **Express**: Framework web para gerenciar rotas e requisições.
* **Git**: Controle de versão.

## 📂 Estrutura do Projeto 

O projeto segue uma arquitetura modular para facilitar a manutenção:
```text
src/
├── controllers/  # Lógica de controle de entrada/saída (Requests/Responses)
├── models/       # Definição de interfaces e tipos de dados
├── routes/       # Definição das rotas e endpoints da API
├── services/     # Regras de negócio e lógica complexa
├── database/     # Configuração e conexão com banco de dados
└── server.ts     # Ponto de entrada da aplicação
```

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [Git](https://git-scm.com/)

## 🔧 Como Rodar o Projeto

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/ThiagoMathe/todo-list-api.git](https://github.com/ThiagoMathe/todo-list-api.git)
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

## autor

Desenvolvido por **Thiago Matheus Honorato**.

---