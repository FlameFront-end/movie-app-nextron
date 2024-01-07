import Link from 'next/link'
import { FC } from 'react'

import MyButton from '../ui/MyButton/MyButton'

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
					<MyButton className={s.btn}>
						<i className='bx bx-play'></i>
					</MyButton>
				</div>
				<h3 className={s.cardTitle}>{title || name}</h3>
			</>
		</Link>
	)
}

export default MovieCard
