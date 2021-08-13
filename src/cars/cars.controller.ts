import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CarsDto } from './cars.dto';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {

    constructor(private readonly service: CarsService) {}

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
  async createPost(@Body() dto: CarsDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: CarsDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}
