import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import bg from '../../public/images/footer-bg.jpg'
import tmovie from '../../public/images/tmovie.png'

import s from './Footer.module.scss'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<div className={s.footerWrapper}>
			<div className={s.test}>
				<Image src={bg} />
			</div>
			<footer className={s.footer}>
				<div className={s.footer__content + 'container'}>
					<div className={s.footer__content__menus}>
						<div className={s.footer__content__menu}>
							<Link href='/' className='accent-red-500'>
								{t('Home')}
							</Link>
							<Link href='/'>{t('Contact us')}</Link>
							<Link href='/'>{t('Term of services')}</Link>
							<Link href='/'>{t('About us')}</Link>
						</div>
						<div className={s.footer__content__menu}>
							<Link href='/'>{t('Live')}</Link>
							<Link href='/'>{t('FAQ')}</Link>
							<Link href='/'>{t('Premium')}</Link>
							<Link href='/'>{t('Term of services')}</Link>
							<Link href='/'>{t('Privacy policy')}</Link>
						</div>
						<div className={s.footer__content__menu}>
							<Link href='/'>{t('You must watch')}</Link>
							<Link href='/'>{t('Recent release')}</Link>
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
				</div>
			</footer>
		</div>
	)
}

export default Footer
