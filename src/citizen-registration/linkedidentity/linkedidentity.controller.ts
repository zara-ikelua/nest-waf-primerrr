import { Controller, Get, Post, Body, Put, Param, Delete, Render} from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';

@Controller('linkedidentity')
export class LinkedidentityController {
  constructor(private readonly linkedidentityService: LinkedidentityService) {}

  @Get('create')
  @Render('users/create-Linkedidentity.html')
  createForm() {
  }

  @Post()
  create(@Body() createLinkedidentityDto: CreateLinkedidentityDto) {
    return this.linkedidentityService.create(createLinkedidentityDto);
  }

  @Get()
  findAll() {
    return this.linkedidentityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkedidentityService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLinkedidentityDto: UpdateLinkedidentityDto) {
    return this.linkedidentityService.update(+id, updateLinkedidentityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkedidentityService.remove(+id);
  }
}
