import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import s from './Layout.module.scss'

interface LayoutProps {
	title: string
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<main>
				<Header />
				<div className={s.main_content}>
					<div className=''>{children}</div>
				</div>
				<Footer />
			</main>
		</>
	)
}

export default Layout
