import { IsString } from 'class-validator';

export class AuthClienteDto {

    @IsString()
    email: string;

    @IsString()
    password: string;

}
