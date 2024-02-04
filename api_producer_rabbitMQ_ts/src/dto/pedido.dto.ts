import { IsBoolean, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Item } from '../model/pedido.model';

export class PedidoDto {
  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(14)
  cnpj: string;

  items: Item[];

  @IsBoolean()
  status: boolean;
}
