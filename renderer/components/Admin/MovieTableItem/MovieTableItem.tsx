import { FC } from 'react'
import { CreateResponseMovieDto } from '../../../api/dto/movie.dto'
import s from './MovieTableItem.module.scss'

interface MovieTableItem {
	movie: CreateResponseMovieDto
}

const MovieTableItem: FC<MovieTableItem> = ({ movie }) => {
	function formatDate(dateString: string) {
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()

		return `${day < 10 ? '0' + day : day}.${
			month < 10 ? '0' + month : month
		}.${year}`
	}

	return (
		<tr className={s.wrapper}>
			<td>
				<div className='image_block'>
					<img
						src={movie.mainImage}
						width={40}
						height={40}
						className='image'
						alt='main'
					/>
				</div>
			</td>
			<td>{movie.title}</td>
			<td>{movie.description}</td>
			<td>
				<div className={s.tagsBlock}>
					{movie.actors?.map((item, index) => (
						<div className={s.tag} key={index}>
							{item}
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
