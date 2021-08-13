import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarsDto } from './cars.dto';
import { Cars } from './cars.entity';

@Injectable()
export class CarsService {
    constructor(
        @InjectRepository(Cars)
        private readonly repository: Repository<Cars>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('Task does not exist');
        return post;
      }
    
      async createOne(dto: CarsDto) {
       const cars = this.repository.create(dto);
        return await this.repository.save(cars);
      }
    
      async editOne(id: number, dto: CarsDto) {
        const cars = await this.repository.findOne(id);
    
        if (!cars) throw new NotFoundException('Task does not exist');
    
        const editedCars = Object.assign(cars, dto);
        return await this.repository.save(editedCars);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
