import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CarsDto } from './cars.dto';
import { CarsService } from './cars.service';

@ApiTags('Cars')
@Controller('cars')
export class CarsController {

  constructor(private readonly service: CarsService) { }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getMany() {
    const data = await this.service.getAll();
    return { data };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return { data };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Body() dto: CarsDto) {
    const data = await this.service.createOne(dto);
    return data;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: CarsDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

}
