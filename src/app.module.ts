import { Module } from '@nestjs/common'
import { PostsModule } from '@src/modules/posts/posts.module'
import { UserModule } from '@src/modules/user/user.module'
import { HealthCheckModule } from '@src/modules/healthcheck/healthcheck.module'
import { DatabaseModule } from '@src/database/db.module'
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import { ENV } from '@src/app.config'
import {
  APP_FILTER,
  APP_GUARD,
  APP_INTERCEPTOR,
  APP_PIPE,
  HttpAdapterHost,
} from '@nestjs/core'
import { ThrottlerGuard } from '@nestjs/throttler'

winston.addColors({ info: 'cyan', error: 'bold red' })

@Module({
  imports: [
    PostsModule,
    UserModule,
    HealthCheckModule,
    WinstonModule.forRoot({
      level: ENV.LOG_LEVEL,
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.Console({ level: 'http' }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('Shopper', {
              colors: true,
              prettyPrint: true,
              processId: true,
              appName: true,
            }),
          ),
        }),
      ],
    }),
    DatabaseModule,
  ],
  exports: [WinstonModule],
})
export class AppModule {}
