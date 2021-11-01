import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsPassportNumber, IsString, Length } from "class-validator";
import { TipoUsuario } from "src/enums/TipoUsuario";


export class UsuariosDto {
    @ApiProperty()
    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @ApiProperty()
    @Type(()=> Date)
    @IsOptional()
    fechaAlteracion: Date;

    @ApiProperty()
    @Length(1)
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    login: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    Contrasenia: string;
    
    @ApiProperty()
    @IsEnum(TipoUsuario,{message: 'Error en tipo usuario'})
    tipoUsuario: TipoUsuario;

}