import { useRouter } from 'next/router'
import { FC } from 'react'

import { formatDate } from '../../../../utils'

import s from './MovieTableItem.module.scss'

interface MovieTableItem {
	movie: any
	handleDelete: (id: number) => void
}

const MovieTableItem: FC<MovieTableItem> = ({ movie, handleDelete }) => {
	const { push } = useRouter()

	return (
		<tr className={s.wrapper}>
			<td>
				<div className={s.image_block}>
					<img src={movie.posterImage} className={s.image} alt='poster' />
				</div>
			</td>
			<td>{movie.title}</td>
			<td>{movie.description}</td>
			<td>
				<div className={s.actors}>
					{movie.tags?.map((tag, index) => (
						<div className={s.actor} key={index}>
							{tag}
						</div>
					))}
				</div>
			</td>
			<td>
				<div className={s.actors}>
					{movie.actors?.map((actor, index) => (
						<div className={s.actor} key={index}>
							{actor.fullName}
						</div>
					))}
				</div>
			</td>
			<td>{formatDate(movie.createdAt)}</td>
			<td>
				<div className={s.actions_block}>
					<button
						onClick={() => push(`/admin-dashboard/edit-movie/${movie.id}`)}
					>
						Редактировать
					</button>
					<button onClick={() => handleDelete(movie.id)}>Удалить</button>
				</div>
			</td>
		</tr>
	)
}

export default MovieTableItem
