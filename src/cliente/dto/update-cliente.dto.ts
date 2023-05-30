import { PartialType } from '@nestjs/swagger';
import { CreateClienteDto } from './create-cliente.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
    @IsString()
    nome: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}
