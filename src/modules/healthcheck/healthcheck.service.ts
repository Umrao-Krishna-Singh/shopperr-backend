import { Injectable } from '@nestjs/common'

@Injectable()
export class HealthCheckService {
  getHello(): 'Success!' {
    return 'Success!'
  }
}
