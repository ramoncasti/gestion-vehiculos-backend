
import { Agendamientos } from "src/agendamientos/agendamientos.entity";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import { classToPlain, Exclude } from "class-transformer";

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

    @Exclude({ toPlainOnly: true})
    @Column()
    Contrasenia:string;

    @Column()
    tipoUsuario: TipoUsuario;

    @OneToMany(() => Agendamientos, agendamientos => agendamientos.usuarios,{ cascade: true })
     agendamientos: Array<Agendamientos>;

    @OneToMany(() => Servicios, servicios => servicios.usuarios,{ cascade: true })
     servicios: Array<Servicios>;

     toJSON() {
        return classToPlain(this);
      }

     @BeforeInsert()
     @BeforeUpdate()
     async hashPassword(){
         if(!this.Contrasenia){
            this.Contrasenia = this.login;
         }
         const salt = await bcrypt.genSalt();
         this.Contrasenia = await bcrypt.hash(this.Contrasenia,salt);
     }
     
     async validarPassword(Contrasenia:string){
        return await bcrypt.compareSync(Contrasenia,this.Contrasenia);
     }

}