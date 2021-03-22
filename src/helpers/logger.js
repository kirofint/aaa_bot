
import fs from 'fs'

export function errLogger ({ stack }) {
	if (!stack) return false
	
	const stream = fs.createWriteStream("err.log", {'flags': 'a'})
	stream.once('open', () => {
		stream.write(`[${ new Date().toLocaleString() }] ${stack}\r\n`)
	})
}