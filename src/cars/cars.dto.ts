import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString} from "class-validator";
import { Disponibilidad } from "src/enums/Disponibilidad";

export class CarsDto {
    @ApiProperty()
    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @ApiProperty()
    @Type(()=> Date)
    @IsOptional()
    fechaAlteracion: Date;

    @ApiProperty()
    @IsString()
    chapa: string;

    @ApiProperty()
    @IsString()
    chasis: string;

    @ApiProperty()
    @IsString()
    fabricante: string;

    @ApiProperty()
    @IsString()
    modelo: string;

    @ApiProperty()
    @IsInt()
    kilometraje: number;

    @ApiProperty()
    @IsInt()
    AnioModelo: number;

    @ApiProperty()
    @IsInt()
    AnioFabricacion: number;

    @ApiProperty()
    @IsString()
    descripcion: string;
    
    @ApiProperty()
    @IsEnum(Disponibilidad, {message: 'Error en disponibilidad'})
    disponibilidad: Disponibilidad;

}