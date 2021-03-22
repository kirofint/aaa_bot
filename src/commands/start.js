import { isGroup } from '../middlewares/chatChecks.js'
import { getAAA } from '../helpers/generators.js'

export function commandStart (bot) {
	bot.command('start_aaa', isGroup, ctx => {
		setTimeout(() => 
			ctx.reply(getAAA(), { chat_id: ctx.chat.id })
		, 2000)
	})
}