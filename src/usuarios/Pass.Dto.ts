import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class PassDto{
    @ApiProperty()
    @IsString()
    login:string;

    @ApiProperty()
    @IsString()
    Contrasenia:string;

    @ApiProperty()
    @IsString()
    newPass:string;
}