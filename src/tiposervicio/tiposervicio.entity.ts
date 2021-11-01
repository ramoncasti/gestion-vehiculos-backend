
import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TipoServicio{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    descripcion: string;

    @OneToMany(() => Servicios, servicios => servicios.tiposervicio,{ cascade: true })
     servicios: Array<Servicios>;

    @OneToMany(type => Agendamientos, agendamiento => agendamiento.tiposervicio)
    agendamientos:Agendamientos;

}