import type { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

import type { AppProps } from 'next/app'

import '../assets/boxicons-2.0.7/css/boxicons.min.css'
import '../styles/App.scss'
import '../styles/index.scss'

import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? (page => page)

	return getLayout(<Component {...pageProps} />)
}
