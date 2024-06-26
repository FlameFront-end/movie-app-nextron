import { AnimatePresence } from 'framer-motion'
import { SnackbarProvider } from 'notistack'
import React, { useEffect } from 'react'

import type { AppProps } from 'next/app'

import '../components/ui/FavoriteBtn/FavoriteBtn.scss'

import * as Api from '../api'
import '../assets/boxicons-2.0.7/css/boxicons.min.css'
import { Footer, Header } from '../components'
import { state } from '../state'
import '../styles/App.scss'
import '../styles/index.scss'
import { getCookie } from '../utils'

import 'swiper/css'

export default function App({ Component, pageProps, router }: AppProps) {
	useEffect(() => {
		const token = getCookie('_token')

		Api.movie.getAllPopular().then(res => {
			state.popularMovies = res
		})

		Api.movie.getAll().then(res => {
			state.movies = res
		})

		if (token && token !== 'undefined') {
			Api.auth.getMe().then(user => {
				state.user = user
			})
		}

		Api.user.getAll().then(res => {
			state.users = res
		})

		Api.actor.getAll().then(res => {
			state.actors = res
		})
	}, [])

	return (
		<div>
			<Header />
			<SnackbarProvider
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
				maxSnack={2}
				autoHideDuration={2000}
			>
				<AnimatePresence mode='wait'>
					<Component key={router.route} {...pageProps} />
				</AnimatePresence>
			</SnackbarProvider>
			<Footer />
		</div>
	)
}
