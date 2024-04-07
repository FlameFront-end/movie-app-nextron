import { FC, useState } from 'react'
import { useSnapshot } from 'valtio'
import * as Api from '../../../../api'
import { state } from '../../../../state'
import { showErrorSnackbar } from '../../../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../../../utils/successSnackbar'
import MovieTableItemSkeleton from '../../../Skeletons/MovieTableItemSkeleton/MovieTableItemSkeleton'
import Table from '../../../ui/Table/Table'
import MovieTableItem from '../MovieTableItem/MovieTableItem'
import s from './MoviesTable.module.scss'

const MoviesTable: FC = () => {
	const [isLoading, setIsLoading] = useState(false)
	const snap = useSnapshot(state)

	const handleDelete = (id: number) => {
		Api.movie
			.remove(id)
			.then(() => {
				Api.movie.getAll().then(res => {
					state.movies = res
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
					{snap.movies.map((item, index) => (
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
