import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LearnersModule } from './learners/learners.module';
import { GuardiansModule } from './guardians/guardians.module';
import { ClassesModule } from './classes/classes.module';
import { AttendanceModule } from './attendance/attendance.module';
import { FeesModule } from './fees/fees.module';
import { CommsModule } from './comms/comms.module';
import { SystemModule } from './system/system.module';

@Module({
  imports: [AuthModule, LearnersModule, GuardiansModule, ClassesModule, AttendanceModule, FeesModule, CommsModule, SystemModule]
})
export class AppModule {}
