import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { Kysely, MysqlDialect } from 'kysely'
import { createPool } from 'mysql2'
import { ENV } from '@src/app.config'
import { DB } from '@src/../prisma/keysley/types'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { Logger } from 'winston'

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: Kysely<DB>
  private readonly dialect = new MysqlDialect({
    pool: createPool({
      database: ENV.DB_NAME,
      host: ENV.DB_HOST,
      user: ENV.DB_USER,
      password: ENV.DB_PASS,
      port: ENV.DB_PORT,
      connectionLimit: ENV.DB_CONN_LIMIT,
    }),
  })

  constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
    this.client = new Kysely<DB>({
      dialect: this.dialect,
    })
  }

  async onModuleInit() {
    try {
      const val = await this.client.selectFrom('User').selectAll().execute()
      this.logger.info('got value from db')
      console.log(val)
    } catch (error) {
      this.logger.error(error)
    }
  }

  async onModuleDestroy() {
    // await this.client.$disconnect()
  }

  get(): Kysely<DB> {
    return this.client
  }
}
