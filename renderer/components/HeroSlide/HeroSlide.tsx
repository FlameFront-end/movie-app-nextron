import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import MyButton, { OutlineButton } from '../ui/MyButton/MyButton'

import s from './HeroSlide.module.scss'

interface HeroSlideProps {
	className: string
}

export const HeroSlide: FC<HeroSlideProps> = ({ className }) => {
	const { t } = useTranslation()

	console.log(className)

	const item = {
		overview:
			'When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.',
		title: 'Trolls Band Together'
	}
	return (
		<div
			className={s.slide}
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original//xgGGinKRL8xeRkaAR9RMbtyk60y.jpg)`
			}}
		>
			<div className={s.content + 'container'}>
				<div className={s.info}>
					<h2 className={s.title}>{item.title}</h2>
					<div className={s.overview}>{item.overview}</div>
					<div className={s.btns}>
						<MyButton>{t('Watch now')}</MyButton>
						<OutlineButton>{t('Watch trailer')}</OutlineButton>
					</div>
				</div>
				<div className={s.poster}>
					<img
						alt=''
						src='https://image.tmdb.org/t/p/w500//qV4fdXXUm5xNlEJ2jw7af3XxuQB.jpg'
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSlide
