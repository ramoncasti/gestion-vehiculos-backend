import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiciosDto } from './servicios.dto';
import { Servicios } from './servicios.entity';

@Injectable()
export class ServiciosService {
    constructor(
        @InjectRepository(Servicios)
        private readonly repository: Repository<Servicios>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Task does not exist');
        return post;
      }
    
      async createOne(dto: ServiciosDto) {
        const servicios = this.repository.create(dto);
        return await this.repository.save(servicios);
      }
    
      async editOne(id: number, dto: ServiciosDto) {
        const servicios = await this.repository.findOne(id);
    
        if (!servicios) throw new NotFoundException('Task does not exist');
    
        const editedServicios = Object.assign(servicios, dto);
        return await this.repository.save(editedServicios);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
