import { FC, useEffect, useState } from 'react'
import * as Api from '../../../../api'
import { CreateResponseMovieDto } from '../../../../api/movie/movie.dto'
import { showErrorSnackbar } from '../../../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../../../utils/successSnackbar'
import MovieTableItemSkeleton from '../../../Skeletons/MovieTableItemSkeleton/MovieTableItemSkeleton'
import Table from '../../../ui/Table/Table'
import MovieTableItem from '../MovieTableItem/MovieTableItem'
import s from './MoviesTable.module.scss'

const MoviesTable: FC = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [movies, setMovies] = useState<CreateResponseMovieDto[]>([])

	useEffect(() => {
		Api.movie.getAll().then(res => {
			setMovies(res)
			setIsLoading(false)
		})
	}, [])

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

	const arr = [null, null]

	return (
		<div className={s.wrapper}>
			{isLoading ? (
				arr.map((item, index) => (
					<MovieTableItemSkeleton key={index} items={1} />
				))
			) : (
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
			)}
		</div>
	)
}

export default MoviesTable
