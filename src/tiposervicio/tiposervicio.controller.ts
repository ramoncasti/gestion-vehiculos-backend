import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TipoServicioDto } from './TipoServicio.dto';
import { TiposervicioService } from './tiposervicio.service';

@ApiTags('Tiposervicio')
@Controller('tiposervicio')
export class TiposervicioController {
    constructor(private readonly service: TiposervicioService) {}

    @Get()
    async getMany() {
      const data = await this.service.getAll();
      return { data };
    }

    @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return { data };
   }
  
    @Post()
    async createPost(@Body() dto: TipoServicioDto) {
      const data = await this.service.createOne(dto);
      return data;
    }
  
    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: TipoServicioDto) {
      const data = await this.service.editOne(id, dto);
      return data;
    }
  
    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
      const data = await this.service.deleteOne(id);
      return data;
    }

}
function ParseInstPipe(arg0: string, ParseInstPipe: any) {
    throw new Error('Function not implemented.');
}

