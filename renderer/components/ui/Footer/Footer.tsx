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
							{t('Главная')}
						</Link>
						<Link href='/renderer/public'>{t('Контакты')}</Link>
						<Link href='/renderer/public'>{t('О нас')}</Link>
					</div>
					<div className={`${s.menu}`}>
						<Link href='/renderer/public'>{t('Прямой эфир')}</Link>
						<Link href='/renderer/public'>{t('FAQ')}</Link>
						<Link href='/renderer/public'>{t('Премиум')}</Link>
						<Link href='/renderer/public'>{t('Кондефициальность')}</Link>
					</div>
					<div className={s.menu}>
						<Link href='/renderer/public'>{t('Что посмотреть')}</Link>
						<Link href='/renderer/public'>{t('Недавний выпуск')}</Link>
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
