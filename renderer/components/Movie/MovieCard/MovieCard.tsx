import Link from 'next/link'
import { FC } from 'react'
import Button from '../../ui/Button/Button'
import s from './MovieCard.module.scss'

interface MovieCardProps {
	backgroundImgUrl?: string
	category: string
	id: number
	name?: string
	title?: string
}

const MovieCard: FC<MovieCardProps> = ({ backgroundImgUrl, name, title }) => {
	return (
		<Link href='/movies'>
			<>
				<div
					className={s.movieCard}
					style={{ backgroundImage: `url(${backgroundImgUrl})` }}
				>
					<Button className={s.btn}>
						<i className='bx bx-play'></i>
					</Button>
				</div>
				<h3 className={s.cardTitle}>{title || name}</h3>
			</>
		</Link>
	)
}

export default MovieCard
