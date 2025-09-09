import { Module } from '@nestjs/common';
import { GuardiansController } from './guardians.controller';
import { GuardiansService } from './guardians.service';

@Module({
  controllers: [GuardiansController],
  providers: [GuardiansService]
})
export class GuardiansModule {}
