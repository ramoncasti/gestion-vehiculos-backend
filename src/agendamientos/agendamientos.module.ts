import { Module } from '@nestjs/common';
import { AgendamientosController } from './agendamientos.controller';
import { AgendamientosService } from './agendamientos.service';
import { Agendamientos } from './agendamientos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Agendamientos])],
  controllers: [AgendamientosController],
  providers: [AgendamientosService]
})
export class AgendamientosModule {}
