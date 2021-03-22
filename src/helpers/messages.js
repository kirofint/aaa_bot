import { isGroup, isReply } from '../middlewares/chatChecks.js'
import { getAAA } from './generators.js'

export function messagesHandler (bot) {
	bot.on('text', isGroup, isReply, ctx => {
		ctx.reply(getAAA(), {
			reply_to_message_id: ctx.message.message_id
		})
	})
}