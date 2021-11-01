import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposervicioController } from './tiposervicio.controller';
import { TipoServicio } from './tiposervicio.entity';
import { TiposervicioService } from './tiposervicio.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoServicio])],
  controllers: [TiposervicioController],
  providers: [TiposervicioService]
})
export class TiposervicioModule {}
