import { useRouter } from 'next/router'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import Button, { OutlineButton } from '../../ui/Button/Button'
import s from './HeroSlide.module.scss'

interface HeroSlideProps {
	isActive: boolean
	movie: CreateResponseMovieDto
	setActiveModal: Function
}

export const HeroSlide: FC<HeroSlideProps> = ({
	isActive,
	movie,
	setActiveModal
}) => {
	const { t } = useTranslation()
	const router = useRouter()

	const handleClick = () => {
		router.push(`/catalog/${movie.id}`)
	}

	return (
		<div
			className={`${s.slide} ${isActive ? s.active : ''}`}
			style={{
				backgroundImage: `url(${movie.mainImage})`
			}}
		>
			<div className={s.content + ' container'}>
				<div className={s.info}>
					<h2 className={s.title}>{movie.title}</h2>
					<div className={s.overview}>{movie.description}</div>
					<div className={s.btns}>
						<Button onClick={handleClick}>{t('Смотреть сейчас')}</Button>
						<OutlineButton onClick={() => setActiveModal(true)}>
							{t('Смотреть трейлер')}
						</OutlineButton>
					</div>
				</div>
				<div className={s.poster}>
					<img alt='poster' src={movie.posterImage} className={`${s.image}`} />
				</div>
			</div>
		</div>
	)
}

export default HeroSlide
