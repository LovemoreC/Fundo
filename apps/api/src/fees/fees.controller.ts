import { Controller, Get } from '@nestjs/common';

@Controller('fees')
export class FeesController {
  @Get()
  findAll() {
    return [];
  }
}
