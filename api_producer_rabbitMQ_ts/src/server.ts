import express, { Application } from 'express';
import 'dotenv/config';
export class SetupServer {
  constructor(
    private port = (Number(process.env.PORT) as number) || 3000,
    private app = express(),
  ) {
    this.init();
  }
  init(): void {
    this.app.use(express.json());
    this.start();
  }
  start(): void {
    this.app.listen(this.port, () =>
      console.info(`=> PRODUCER inicializado na porta: ${this.port}`),
    );
  }
  public getApp(): Application {
    return this.app;
  }
}
