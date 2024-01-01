import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import tmovie from '../../public/images/tmovie.png'

import s from './Header.module.scss'

const Header = () => {
	const headerRef = useRef<HTMLDivElement | null>(null)
	const { t } = useTranslation()

	const headerNav = [
		{
			display: t('Home'),
			path: '/'
		},
		{
			display: t('Movies'),
			path: '/catalog'
		},
		{
			display: t('TV Series'),
			path: '/tv'
		},
		{
			display: t('Auth'),
			path: '/auth'
		}
	]

	useEffect(() => {
		const shrinkHeader = () => {
			if (headerRef.current) {
				if (
					document.body.scrollTop > 100 ||
					document.documentElement.scrollTop > 100
				) {
					headerRef.current.classList.add('shrink')
				} else {
					headerRef.current.classList.remove('shrink')
				}
			}
		}
		window.addEventListener('scroll', shrinkHeader)
		return () => {
			window.removeEventListener('scroll', shrinkHeader)
		}
	}, [])

	return (
		<div className={s.header} ref={headerRef}>
			<div className={s.header__wrap}>
				<div className={s.logo}>
					<Image src={tmovie} width={40} height={40} alt='logo' />
					<Link href='/'>MovieHub</Link>
				</div>
				<ul className={s.header__nav}>
					{headerNav.map((e, i) => (
						<li key={i}>
							<Link href={e.path}>{e.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Header
