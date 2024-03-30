import { useEffect, useState } from 'react'
import Socket from '../api/socket'

export const useConnectSocket = () => {
	const [messages, setMessages] = useState([])

	const connectSocket = () => {
		Socket.createConnection()

		Socket.socket?.on('client-path', data => {
			setMessages(prevMessages => [...prevMessages, JSON.stringify(data)])
		})
	}

	useEffect(() => {
		connectSocket()
	}, [])

	return { messages }
}
