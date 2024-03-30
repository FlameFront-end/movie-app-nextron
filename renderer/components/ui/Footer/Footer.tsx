import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import s from './Footer.module.scss'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<div className={s.menus}>
					<div className={s.menu}>
						<Link href='/renderer/public' className='accent-red-500'>
							{t('Home')}
						</Link>
						<Link href='/renderer/public'>{t('Contact us')}</Link>
						<Link href='/renderer/public'>{t('Term of services')}</Link>
						<Link href='/renderer/public'>{t('About us')}</Link>
					</div>
					<div className={s.menu}>
						<Link href='/renderer/public'>{t('Live')}</Link>
						<Link href='/renderer/public'>{t('FAQ')}</Link>
						<Link href='/renderer/public'>{t('Premium')}</Link>
						<Link href='/renderer/public'>{t('Term of services')}</Link>
						<Link href='/renderer/public'>{t('Privacy policy')}</Link>
					</div>
					<div className={s.menu}>
						<Link href='/renderer/public'>{t('You must watch')}</Link>
						<Link href='/renderer/public'>{t('Recent release')}</Link>
						<Link
							target='_blank'
							href='https://flamefront-end.github.io/kaliganov-frontend/'
						>
							{t('Artem Kaliganov')}
						</Link>
						<Link target='_blank' href='https://github.com/FlameFront-end'>
							{t('GitHub')}
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
