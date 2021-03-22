import 'dotenv/config.js'
import { bot } from './helpers/bot.js'

bot.catch(errLogger).launch()