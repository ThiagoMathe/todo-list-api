import express from 'express';
import { router } from './routes/todo.routes';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use(cors());

app.use(router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('🔥 Servidor (Modular) rodando em http://localhost:3000');
});