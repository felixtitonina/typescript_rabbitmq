import client, { Channel, Connection } from 'amqplib';

export class SetupRabbitMQ {
  private connection: Connection;
  private channel: Channel;
  private QUEUE: string = 'pedidos';

  constructor() {
    this.init();
  }
  async init(): Promise<void> {
    await this.getConnection();
    await this.createChannel();
    await this.channel.assertQueue(this.QUEUE);
  }
  private async getConnection(): Promise<void> {
    console.log(
      '=> getConnection',
      `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASS}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`,
    );

    this.connection = await client.connect(`amqp://${process.env.RABBITMQ_HOST}`);
  }
  private async createChannel(): Promise<void> {
    this.channel = await this.connection.createChannel();
  }

  public sendMessage(payload: any): void {
    const message = JSON.stringify(payload);
    this.channel.sendToQueue(this.QUEUE, Buffer.from(message));
  }
}
