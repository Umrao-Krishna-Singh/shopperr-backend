import { Controller, Inject, Get } from '@nestjs/common'
import { HealthCheckService } from './healthcheck.service'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

@Controller()
export class HealthCheckController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly healthCheckService: HealthCheckService,
  ) {}

  @Get('/test')
  getHello(): string {
    this.logger.http('request received')

    return this.healthCheckService.getHello()
  }
}
