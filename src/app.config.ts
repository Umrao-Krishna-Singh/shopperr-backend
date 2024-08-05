import * as dotenv from 'dotenv'
dotenv.config()
import { z } from 'zod'
// import { AxiosRequestConfig } from 'axios'
// import { isDev } from '@src/constants/environment.constant'

const coerce = z.coerce
const ENVSchema = z.object({
  API_HOST: coerce.string().ip(),
  API_PORT: coerce.number(),
  DATABASE_URL: coerce.string(),
  NODE_ENV: z.enum(['dev', 'prod']).default('dev'),
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug', 'silly']).default('silly'),
})

export const ENV = ENVSchema.parse(process.env)
export const isDev = ENV.NODE_ENV === 'dev'

export const REDIS = {
  // host: argv.redis_host || 'localhost',
  // port: argv.redis_port || 6379,
  // password: argv.redis_password || null,
  ttl: null,
  httpCacheTTL: 5,
  max: 5,
  // disableApiCache: (isDev || argv.disable_cache) && !process.env['ENABLE_CACHE_DEBUG'],
}

export const SECURITY = {
  // jwtSecret: argv.jwtSecret || 'asjhczxiucipoiopiqm2376',
  jwtExpire: 7,
}

// export const AXIOS_CONFIG: AxiosRequestConfig = {
//   timeout: 10000,
// }

export const ENCRYPT = {
  key: '',
  enable: false,
  // algorithm: argv.encrypt_algorithm || 'aes-256-ecb',
}

export const CLUSTER = {
  enable: false,
  // workers: argv.cluster_workers,
}
