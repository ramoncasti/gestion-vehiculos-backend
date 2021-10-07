import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Disponibilidad } from "src/enums/Disponibilidad";

@Entity()
export class Cars{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    chapa: string;

    @Column()
    chasis: string;

    @Column()
    fabricante: string;
    
    @Column()
    modelo: string;

    @Column()
    kilometraje: number;

    @Column()
    AnioModelo: number;

    @Column()
    AnioFabricacion: number;

    @Column()
    descripcion: string;

    @Column()
    disponibilidad: Disponibilidad;

    @OneToMany(() => Servicios, servicios => servicios.cars,{ cascade: true })
     servicios: Array<Servicios>;
}
