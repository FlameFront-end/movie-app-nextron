import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import * as Api from '../api'
import '../assets/boxicons-2.0.7/css/boxicons.min.css'
import { state } from '../state'
import '../styles/App.scss'
import '../styles/index.scss'
import { getCookie } from '../utils/getCookie'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'

export default function App({ Component, pageProps, router }: AppProps) {
	useEffect(() => {
		const token = getCookie('_token')

		if (token && token !== 'undefined') {
			Api.auth.getMe().then(user => {
				state.user = user
			})
		}
	}, [])

	return (
		<div className='main'>
			<Header />
			<AnimatePresence mode='wait'>
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer />
		</div>
	)
}
