import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsPassportNumber, IsString, Length } from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad";
import { TipoUsuario } from "src/enums/TipoUsuario";


export class UsuariosDto {
    
    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(()=> Date)
    @IsOptional()
    fechaAlteracion: Date;

    @Length(1)
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    login: string;

    @IsString()
    @IsOptional()
    Contrasenia: string;
    
    @IsEnum(TipoUsuario,{message: 'Error en tipo usuario'})
    tipoUsuario: TipoUsuario;

}