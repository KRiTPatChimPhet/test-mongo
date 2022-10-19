import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AquaticService } from './aquatic.service';
import { CreateAquaticDto } from './dto/create-aquatic.dto';
import { UpdateAquaticDto } from './dto/update-aquatic.dto';

@Controller('aquatic')
export class AquaticController {
  constructor(private readonly aquaticService: AquaticService) {}

  @Post()
  create(@Body() createAquaticDto: CreateAquaticDto) {
    return this.aquaticService.create(createAquaticDto);
  }

  @Get()
  findAll() {
    return this.aquaticService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.aquaticService.findOne(id);
  }

  @Get('name')
  findByName(@Param('name') name: string) {
    return this.aquaticService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAquaticDto: UpdateAquaticDto) {
    return this.aquaticService.update(id, updateAquaticDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.aquaticService.delete(id);
  }
}
