import { findOrCreate } from '../models/Chat.js'
import { isGroup } from './chatChecks.js'

export async function fetchChat (ctx, next) {
	if(!isGroup(ctx, () => '')) return false
	ctx.state.chat = await findOrCreate(ctx.chat.id)
	next()
}