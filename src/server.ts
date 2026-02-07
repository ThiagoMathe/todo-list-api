// src/server.ts
import express from 'express';
import { router } from './routes/todo.routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('🔥 Servidor (Modular) rodando em http://localhost:3000');
});