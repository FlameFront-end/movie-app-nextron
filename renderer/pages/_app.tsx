import type { NextPage } from 'next'
import { SnackbarProvider } from 'notistack'
import { ReactElement, ReactNode, useEffect } from 'react'
import type { AppProps } from 'next/app'
import * as Api from '../api'
import '../assets/boxicons-2.0.7/css/boxicons.min.css'
import { state } from '../state'
import '../styles/App.scss'
import '../styles/index.scss'
import { getCookie } from '../utils/getCookie'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	useEffect(() => {
		const token = getCookie('_token')

		if (token) {
			Api.auth.getMe().then(user => {
				state.user = user
			})
		}
	}, [])

	const getLayout = Component.getLayout ?? (page => page)

	return getLayout(
		<SnackbarProvider
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			maxSnack={2}
			autoHideDuration={2000}
		>
			<Component {...pageProps} />
		</SnackbarProvider>
	)
}
