import { FC } from 'react'
import { CreateResponseMovieDto } from '../../../../api/movie/movie.dto'
import { formatDate } from '../../../../utils/formatDate'
import s from './MovieTableItem.module.scss'

interface MovieTableItem {
	movie: CreateResponseMovieDto
	handleDelete: (id: number) => void
}

const MovieTableItem: FC<MovieTableItem> = ({ movie, handleDelete }) => {
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
					<button>Редактировать</button>
					<button onClick={() => handleDelete(movie.id)}>Удалить</button>
				</div>
			</td>
		</tr>
	)
}

export default MovieTableItem
