import { Controller, Get } from '@nestjs/common';

@Controller('learners')
export class LearnersController {
  @Get()
  findAll() {
    return [];
  }
}
