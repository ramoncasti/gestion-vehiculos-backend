import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, Length } from "class-validator";


export class ServiciosDto {
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
    @IsOptional()
    descripcion: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fecha_inicio: Date;

    @ApiProperty()
    @IsString()
    @IsOptional()
    fecha_fin: Date;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    KmInicial: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    KmFinal: number;

    @ApiProperty()
    @IsNumber()
    @IsOptional()
    ValorServicio: number;

}