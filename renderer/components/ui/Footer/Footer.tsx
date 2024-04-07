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
						<Link href='/' className='accent-red-500'>
							{t('Главная')}
						</Link>
						<Link href='/'>{t('Контакты')}</Link>
						<Link href='/'>{t('О нас')}</Link>
					</div>
					<div className={`${s.menu}`}>
						<Link href='/'>{t('Прямой эфир')}</Link>
						<Link href='/'>{t('FAQ')}</Link>
						<Link href='/'>{t('Премиум')}</Link>
						<Link href='/'>{t('Кондефициальность')}</Link>
					</div>
					<div className={s.menu}>
						<Link href='/'>{t('Что посмотреть')}</Link>
						<Link href='/'>{t('Недавний выпуск')}</Link>
						<Link target='_blank' href='https://github.com/FlameFront-end/'>
							{t('Артём Калиганов')}
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
