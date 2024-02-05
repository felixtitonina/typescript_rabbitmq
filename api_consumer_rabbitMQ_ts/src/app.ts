import { rabbitmqFactory } from './factories/pedido.factory';
import SetupServer from './server';

(async (): Promise<void> => {
  const PORT = (Number(process.env.PORT) as number) || 3001;
  new SetupServer(PORT).init();
  rabbitmqFactory();
})();
