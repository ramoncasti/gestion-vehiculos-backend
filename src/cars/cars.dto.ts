import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length} from "class-validator";
import {TipoServicio} from "../enums/TipoServicio";


export class CarsDto {

    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsString()
    @IsOptional()
    situacion:string;

    @IsInt()
    @IsOptional()
    AnioFabricacion: number;

    @IsInt()
    @IsOptional()
    AnioModelo: number;

    @IsInt()
    @IsOptional()
    kilometraje: number;

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

}