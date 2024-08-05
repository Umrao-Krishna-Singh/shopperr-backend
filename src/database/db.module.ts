import { Module, Global } from '@nestjs/common'
import { DatabaseService } from './db.service'

@Module({
  //   controllers: [HealthCheckController],
  providers: [DatabaseService],
})
@Global()
export class DatabaseModule {}
