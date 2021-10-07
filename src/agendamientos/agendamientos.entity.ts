import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    fecha_Objetivo: Date;

    @Column()
    tipo_periodo: string;

    @OneToOne(type => Servicios,servicios => servicios.agendamientos)
    @JoinColumn()
    servicios:Servicios;
    


}