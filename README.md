# 🚀  Todo List

## 📌 Sobre o Projeto

O Task Master é uma aplicação full stack desenvolvida com foco em boas práticas de arquitetura, validação de dados e separação de responsabilidades. O projeto simula um ambiente real de desenvolvimento, aplicando conceitos como Service Pattern, validação com Zod e integração entre frontend e backend via API REST.


![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/Node.js-v18+-green.svg)
![React](https://img.shields.io/badge/React-v18-blue.svg)

## 📸 Preview da Aplicação

<p align="center">
  <img src="./docs/screenshot.png" alt="Task Master Screenshot" width="800"/>
</p>

## 🛠️ Tecnologias Utilizadas

### Backend (API)
- **Node.js & Express**;
- **Prisma ORM**;
- **Zod**;
- **Arquitetura MVC/Service**.

### Frontend (Web)
- **React + Vite**;
- **TypeScript**;
- **Tailwind CSS**;
- **Axios**;
- **Lucide React**;
- **Service Pattern & Custom Hooks**.

## 📂 Estrutura do Projeto (Monorepo)

```bash
todo-list-project/
├── backend/            
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middlewares/database/
│   │   ├── routes/
│   │   ├── database/
│   │   └── schemas/    
│   └── prisma/         
│
└── frontend/           
    ├── src/
    │   ├── components/
    │   ├── hooks/      
    │   ├── services/   
    │   └── types/
```

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar a aplicação completa (backend + frontend) em ambiente de desenvolvimento.

---

## 📌 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**

---

### 1️⃣  **Clone o repositório**
    ```bash
    git clone https://github.com/ThiagoMathe/todo-list-project.git
    cd todo-list-project
    ```

### 2️⃣ Configurando o Backend

##### 1 Acesse a pasta do backend

```bash
cd backend
```
##### 2. Instale as dependências:
```bash
npm install
```
##### 3. Inicialize o banco de dados:

```bash
npx prisma migrate dev --name init
```
##### 4. Rode o servidor (Porta 3000):

```bash
npm run dev
```
### 3️⃣ Configurar o Frontend

##### 1 Abra um novo terminal e entre na pasta do frontend:

```bash
cd frontend
```
##### 2. Instale as dependências:
```bash
npm install
```
##### 3. Rode a aplicação (Porta 5173):
```bash
npm run dev
```
## 🧪 Funcionalidades

##### ✅ Gerenciamento de Tarefas
- [x] Criar novas tarefas
- [x] Listar tarefas
- [x] Editar tarefa
- [x] Marcar como concluída
- [x] Excluir tarefa
---
Desenvolvido por Thiago Matheus Honorato