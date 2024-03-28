import { FC, FormEvent, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const Chat: FC = () => {
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState([])

	const socket = io('http://localhost:4000')

	const handleSend = (e: FormEvent) => {
		e.preventDefault()
		if (message.trim()) {
			socket.emit('message', {
				text: message,
				socketId: socket.id
			})

			setMessage('')
		}
	}

	useEffect(() => {
		socket.on('response', (data: any) => setMessages([...messages, data]))
		console.log('messages', messages)
	}, [socket, messages])

	return (
		<div>
			<form onSubmit={handleSend}>
				<input
					type='text'
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<button type='submit'>Send</button>
			</form>

			{messages.map((item, index) => (
				<div key={index}>{item.text}</div>
			))}
		</div>
	)
}

export default Chat
