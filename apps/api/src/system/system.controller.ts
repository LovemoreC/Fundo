import { Controller, Get } from '@nestjs/common';

@Controller('system')
export class SystemController {
  @Get()
  status() {
    return { ok: true };
  }
}
