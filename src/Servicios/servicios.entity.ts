
import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, ManyToOne, OneToMany , OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Servicios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    KmInicial: number;

    @Column()
    KmFinal: number;

    @Column()
    tiposervicio: number;

    @Column()
    ValorServicio: number;

    @Column()
    fechaCreacion: Date;

    @ManyToOne(type => Usuarios, usuarios => usuarios.servicios)
    usuarios:Usuarios;

    @ManyToOne(type => Cars, cars => cars.servicios)
    cars:Cars;

    @OneToOne(type => Agendamientos, agendamiento => agendamiento.servicios)
    agendamientos:Agendamientos;
}

