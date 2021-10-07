import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { TipoPeriodoAgendamiento } from "src/enums/TipoPeriodoAgendamiento";
import { ServiciosDto } from "src/Servicios/servicios.dto";
import { Servicios } from "src/Servicios/servicios.entity";


export class AgendamientosDto {
    @Type(() => Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @ApiProperty()
    @IsEnum(TipoAgendamiento)
    tipo: TipoAgendamiento;

    @ApiProperty()
    @Type(() => Date)
    fecha_objetivo: Date;

    @ApiProperty()
    @IsEnum(TipoPeriodoAgendamiento)
    tipo_periodo: TipoPeriodoAgendamiento;

    @ApiProperty()
    @IsNumber()
    periodo: number;

    @ApiProperty({ type: ServiciosDto })
    servicio: Servicios;
}