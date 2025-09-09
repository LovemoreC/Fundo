import { Controller, Get } from '@nestjs/common';

@Controller('guardians')
export class GuardiansController {
  @Get()
  findAll() {
    return [];
  }
}
