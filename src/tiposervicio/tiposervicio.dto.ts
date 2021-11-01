import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsString } from "class-validator";

export class TipoServicioDto { 
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
    descripcion: string;

}