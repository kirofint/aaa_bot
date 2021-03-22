export function isGroup (ctx, next) {
	if (
		['group', 'supergroup'].includes(ctx.chat?.type)
	) return next() || true
}

export function isReply (ctx, next) {
	if (!ctx.message?.entitie &&
		ctx.message.reply_to_message?.from.id === ctx.botInfo.id
	) return next()
}