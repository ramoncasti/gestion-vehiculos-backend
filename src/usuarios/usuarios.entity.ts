
import { Disponibilidad } from "src/enums/Disponibilidad";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuarios{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion: Date;

    @Column()
    nombre: string;

    @Column()
    login: string;

    @Column()
    Contrasenia: string;

    @Column()
    tipoUsuario: TipoUsuario;

    @OneToMany(() => Servicios, servicios => servicios.usuarios,{ cascade: true })
     servicios: Array<Servicios>;
}