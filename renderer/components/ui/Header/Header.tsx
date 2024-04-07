import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useSnapshot } from 'valtio'
import tmovie from '../../../public/images/tmovie.png'
import { state } from '../../../state'
import s from './Header.module.scss'

const Header = () => {
	const snap = useSnapshot(state)
	const headerRef = useRef<HTMLDivElement | null>(null)
	const { t } = useTranslation()

	const headerNavNoAuth = [
		{
			display: t('Главная'),
			path: '/'
		},
		{
			display: t('Фильмы'),
			path: '/movies'
		},
		{
			display: t('Вход'),
			path: '/login'
		},
		{
			display: t('Регистрация'),
			path: '/register'
		}
	]

	const headerNavAuth = [
		{
			display: t('Главная'),
			path: '/'
		},
		{
			display: t('Фильмы'),
			path: '/movies'
		},
		...(snap.user?.isAdmin
			? [
					{
						display: t('Админ панель'),
						path: '/admin-dashboard'
					}
				]
			: []),
		{
			display: (
				<div className={s.profile}>
					<Image src={snap.user?.ava} width={50} height={50} />
					<div>{snap.user?.nick}</div>
				</div>
			),
			path: '/profile'
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
					{snap.user ? (
						<>
							{headerNavAuth.map((e, i) => (
								<li key={i}>
									<Link href={e.path}>{e.display}</Link>
								</li>
							))}
						</>
					) : (
						<>
							{headerNavNoAuth.map((e, i) => (
								<li key={i}>
									<Link href={e.path}>{e.display}</Link>
								</li>
							))}
						</>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Header
