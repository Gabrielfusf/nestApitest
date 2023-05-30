import { Body, Inject, Injectable, NotFoundException, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AuthClienteDto } from './dto/auth.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) { }



  @Post('login')
  async login(@Body() authDto: AuthClienteDto) {
    const { email, password } = authDto;


    const cliente = await this.clienteRepository.findOne({ where: { email } });

    if (!cliente || cliente.password !== password) {
      throw new NotFoundException('Credenciais inválidas');
    }
    const token = `${cliente.id}${cliente.nome}${cliente.email}`;
    return { token };

  }

  create(createClienteDto: CreateClienteDto) {
    return this.clienteRepository.save(createClienteDto);
  }

  findAll() {
    return this.clienteRepository.find();
  }

  findOne(id: number) {
    return this.clienteRepository.findOne({ where: { id } });
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clienteRepository.update(id, updateClienteDto);
  }

  remove(id: number) {
    return this.clienteRepository.delete(id);
  }
}
