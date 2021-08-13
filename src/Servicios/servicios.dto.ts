import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { TipoServicio } from "src/enums/TipoServicio";


export class ServiciosDto {
    
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    KmInicial: number;

    @IsNumber()
    @IsOptional()
    KmFinal: number;

    @IsEnum(TipoServicio, {message: 'Error en tipo servicio'})
    tipoServicio: TipoServicio;

    @IsNumber()
    @IsOptional()
    ValorServicio: number;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

}