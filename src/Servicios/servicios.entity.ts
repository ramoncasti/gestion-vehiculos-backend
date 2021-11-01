
import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/tiposervicio/tiposervicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

    @Column()
    KmInicial: number;

    @Column()
    KmFinal: number;

    @Column()
    ValorServicio: number;

    @ManyToOne(type => TipoServicio, tiposervicio => tiposervicio.servicios)
    tiposervicio:TipoServicio;

    @ManyToOne(type => Cars, cars => cars.servicios)
    cars:Cars;
    
    @ManyToOne(type => Usuarios, usuarios => usuarios.servicios)
    usuarios:Usuarios;

}

