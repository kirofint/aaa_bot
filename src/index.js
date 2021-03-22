import 'dotenv/config.js'
import { bot } from './helpers/bot.js'
import { errLogger } from './helpers/logger.js'
import { messagesHandler } from './helpers/messages.js'
import { fetchChat } from './middlewares/fetchChat.js'
import { commandStart } from './commands/start.js'

// Middlewares
bot.use(fetchChat)
// Commands
commandStart(bot)
// Helpers
messagesHandler(bot)

bot.catch(errLogger).launch()