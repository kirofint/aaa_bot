import { promisify } from 'util'
import { createClient } from 'redis'
import { errLogger } from '../helpers/logger.js'

export const client = createClient().on("error", errLogger)

export const hget = promisify(client.hget).bind(client)
export const hmset = promisify(client.hmset).bind(client)