import { FC, useEffect, useState } from 'react'
import * as Api from '../../../api'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import Table from '../../ui/Table/Table'
import MovieTableItem from '../MovieTableItem/MovieTableItem'
import s from './MoviesTable.module.scss'

const MoviesTable: FC = () => {
	const [movies, setMovies] = useState<CreateResponseMovieDto[]>([])

	useEffect(() => {
		Api.movie.getAll().then(res => {
			setMovies(res)
		})
	}, [])

	console.log('movies', movies)

	return (
		<div className={s.wrapper}>
			<Table
				thead={[
					{ title: 'Главное изображение' },
					{ title: 'Название' },
					{ title: 'Описание' },
					{ title: 'Актёры' },
					{ title: 'Дата создания' },
					{ title: 'Действия' }
				]}
			>
				{movies.map((item, index) => (
					<MovieTableItem movie={item} key={index} />
				))}
			</Table>
		</div>
	)
}

export default MoviesTable
