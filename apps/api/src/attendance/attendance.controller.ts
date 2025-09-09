import { Controller, Get } from '@nestjs/common';

@Controller('attendance')
export class AttendanceController {
  @Get()
  findAll() {
    return [];
  }
}
