import { hget, hmset, client }from "./index.js"

const CHAT_KEY = 'aaa_bot_chat_list'

export async function findOrCreate (chatID) {
	const get_chat_list = await hget(CHAT_KEY, 'chatList')
	const chat_list = JSON.parse(get_chat_list) || []
	const hasID = chat_list.length && chat_list.includes(chatID)

	if (!hasID) {
		chat_list.push(chatID)
		await hmset(CHAT_KEY, { "chatList": JSON.stringify(chat_list) })
	}
	return chatID
}
