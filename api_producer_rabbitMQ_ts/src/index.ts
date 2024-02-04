import { SetupRabbitMQ } from './rabbitmq-setup';
import { SetupServer } from './server';
import { Request, Response } from 'express';
import 'dotenv/config';
import { validationMiddleware } from './middleware/validate.middleware';
import { PedidoDto } from './dto/pedido.dto';

(async (): Promise<void> => {
  const server = new SetupServer((Number(process.env.PORT) as number) || 3000);
  const producer = new SetupRabbitMQ();

  server
    .getApp()
    .post('/pedidos', validationMiddleware(PedidoDto), (req: Request, res: Response) => {
      producer.sendMessage(req.body);
      return res.status(200).json({ message: 'Dados enviados para processamento.' });
    });
})();
