import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoServicioDto } from './TipoServicio.dto';
import { TipoServicio } from './tiposervicio.entity';

@Injectable()
export class TiposervicioService {
    constructor(
        @InjectRepository(TipoServicio)
        private readonly repository: Repository<TipoServicio>,
      )  {}
    
      async getAll() {
        return await this.repository.find();
      }

      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Task does not exist');
        return post;
      }

    async createOne(dto: TipoServicioDto ){
        const tiposervicio = this.repository.create(dto);
        return await this.repository.save(tiposervicio);
    }

    async editOne(id:number,dto: TipoServicioDto){
        const tiposervicio = await this.repository.findOne(id);
        if (!tiposervicio) throw new NotFoundException('Elemento no existe!');
        const editedtiposervicio = Object.assign(tiposervicio, dto);
         return await this.repository.save(editedtiposervicio);

    }

    async deleteOne(id:number){
        return await this.repository.delete(id);
    }
}
