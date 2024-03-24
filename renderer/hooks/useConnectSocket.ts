import { useEffect, useState } from 'react'
import SocketApi from '../api/socket-api'

export const useConnectSocket = () => {
	const [messages, setMessages] = useState([])

	const connectSocket = () => {
		SocketApi.createConnection()

		SocketApi.socket?.on('client-path', data => {
			setMessages(prevMessages => [...prevMessages, JSON.stringify(data)])
		})
	}

	useEffect(() => {
		connectSocket()
	}, [])

	return { messages }
}
