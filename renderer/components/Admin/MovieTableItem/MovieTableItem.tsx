import { FC } from 'react'
import { CreateResponseMovieDto } from '../../../api/dto/movie.dto'
import { formatDate } from '../../../utils/formatDate'
import s from './MovieTableItem.module.scss'

interface MovieTableItem {
	movie: CreateResponseMovieDto
}

const MovieTableItem: FC<MovieTableItem> = ({ movie }) => {
	return (
		<tr className={s.wrapper}>
			<td>
				<div className={s.image_block}>
					<img src={movie.mainImage} className={s.image} alt='main' />
				</div>
			</td>
			<td>{movie.title}</td>
			<td>{movie.description}</td>
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
					<button>Удалить</button>
					<button>Редактировать</button>
				</div>
			</td>
		</tr>
	)
}

export default MovieTableItem
