
import { TipoServicio } from "src/enums/TipoServicio";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    tipoServicio: TipoServicio;

    @Column()
    ValorServicio: number;

    @Column()
    fechaCreacion: Date;

}