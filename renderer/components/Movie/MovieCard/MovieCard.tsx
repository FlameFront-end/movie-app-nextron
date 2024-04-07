import { useRouter } from 'next/router'
import { FC } from 'react'
import { useSnapshot } from 'valtio'
import { state } from '../../../state'
import Button from '../../ui/Button/Button'
import FavoriteBtn from '../../ui/FavoriteBtn/FavoriteBtn'
import s from './MovieCard.module.scss'

interface MovieCardProps {
	backgroundImgUrl?: string
	category: string
	id: number
	title?: string
}

const MovieCard: FC<MovieCardProps> = ({ backgroundImgUrl, title, id }) => {
	const snap = useSnapshot(state)
	const router = useRouter()
	const handleClick = () => {
		router.push(`/catalog/${id}`)
	}

	return (
		<>
			<div
				className={s.movieCard}
				style={{ backgroundImage: `url(${backgroundImgUrl})` }}
			>
				{snap.user ? (
					<FavoriteBtn id={id.toString()} className={s.favorite} />
				) : null}
				<Button className={s.btn} onClick={handleClick}>
					<i className='bx bx-play'></i>
				</Button>
			</div>
			<h3 className={s.cardTitle}>{title}</h3>
		</>
	)
}

export default MovieCard
