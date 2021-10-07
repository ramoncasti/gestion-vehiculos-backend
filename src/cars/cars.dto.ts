import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Length} from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad";

export class CarsDto {
    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(()=> Date)
    @IsOptional()
    fechaAlteracion: Date;

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsInt()
    @IsOptional()
    kilometraje: number;

    @IsInt()
    @IsOptional()
    AnioModelo: number;

    @IsInt()
    @IsOptional()
    AnioFabricacion: number;

    @IsString()
    @IsOptional()
    descripcion: string;
    
    @IsEnum(Disponibilidad, {message: 'Error en disponibilidad'})
    disponibilidad: Disponibilidad;

}