
import { Cars } from "src/cars/cars.entity";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { TipoServicio } from "src/tiposervicio/tiposervicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Agendamientos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    descripcion: string;

    @Column()
    tipo: TipoAgendamiento;

    @Column({ nullable: true })
    fecha_objetivo: Date;

    @Column({nullable:true})
    tipo_periodo: string;

    @Column({ nullable: true })
    periodo: number;

    @OneToMany(type => TipoServicio, tiposervicio => tiposervicio.agendamientos)
    @JoinColumn()
    tiposervicio: TipoServicio;

    @ManyToOne(type => Usuarios, usuarios => usuarios.agendamientos)
    @JoinColumn()
    usuarios: Usuarios;

    @ManyToOne(type => Cars, cars => cars.agendamientos)
    @JoinColumn()
    cars: Cars;

}