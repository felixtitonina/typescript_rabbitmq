import { connect as mongooseConnect, connection } from 'mongoose';
import 'dotenv/config';

const MONGODB: string = process.env.MONGODB || '';

export const connect = async (): Promise<void> => {
  await mongooseConnect(MONGODB);
  console.log('Mongo DB conectado');
};

export const close = (): Promise<void> => connection.close();
