import { Controller, Get } from '@nestjs/common';

@Controller('classes')
export class ClassesController {
  @Get()
  findAll() {
    return [];
  }
}
