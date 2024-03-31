import { FC, useEffect, useState } from 'react'
import * as Api from '../../../../api'
import { CreateResponseMovieDto } from '../../../../api/movie/movie.dto'
import { showErrorSnackbar } from '../../../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../../../utils/successSnackbar'
import Table from '../../../ui/Table/Table'
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

	const handleDelete = (id: number) => {
		Api.movie
			.remove(id)
			.then(() => {
				Api.movie.getAll().then(res => {
					setMovies(res)
				})
				showSuccessSnackbar(`Фильм был успешно удалён`)
			})
			.catch(err => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
				console.error(err)
			})
	}

	return (
		<div className={s.wrapper}>
			<Table
				thead={[
					{ title: 'Главное изображение' },
					{ title: 'Название' },
					{ title: 'Описание' },
					{ title: 'Теги' },
					{ title: 'Актёры' },
					{ title: 'Дата создания' },
					{ title: 'Действия' }
				]}
			>
				{movies.map((item, index) => (
					<MovieTableItem
						handleDelete={handleDelete}
						movie={item}
						key={index}
					/>
				))}
			</Table>
		</div>
	)
}

export default MoviesTable
