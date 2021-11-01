import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./cars/cars.module";
import {UsuariosModule} from "./usuarios/usuarios.module";
import {ServiciosModule} from "./Servicios/servicios.module";
import { ConfigModule } from '@nestjs/config';
import { AgendamientosModule } from './agendamientos/agendamientos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Flota_autos',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    AgendamientosModule,
    CarsModule,
    ServiciosModule,
    UsuariosModule ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
