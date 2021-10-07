import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamientosDto } from './agendamientos.dto';
import { Agendamientos } from './agendamientos.entity';

@Injectable()
export class AgendamientosService {
    constructor(
        @InjectRepository(Agendamientos)
        private readonly repository: Repository<Agendamientos>,
      ) {}

      async getAll() {
        return await this.repository.find();
      }

      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El ingresado id no existe');
        return post;
      }

      async createOne(dto: AgendamientosDto) {
        const servicios = this.repository.create(dto);
        return await this.repository.save(servicios);
      }

      async editOne(id: number, dto: AgendamientosDto) {
        const servicios = await this.repository.findOne(id);
    
        if (!servicios) throw new NotFoundException('not exist');
    
        const editedServicios = Object.assign(servicios, dto);
        return await this.repository.save(editedServicios);
      }

      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
