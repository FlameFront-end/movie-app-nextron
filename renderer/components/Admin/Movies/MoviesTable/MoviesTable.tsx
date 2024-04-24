import { FC } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../../../api'
import { state } from '../../../../state'
import { showErrorSnackbar, showSuccessSnackbar } from '../../../../utils'
import { MovieTableItem, Table } from '../../../index'

import s from './MoviesTable.module.scss'

const MoviesTable: FC = () => {
	const snap = useSnapshot(state)

	const handleDelete = (id: number) => {
		Api.movie
			.remove(id)
			.then(() => {
				Api.movie.getAll().then(res => {
					state.movies = res
				})
				Api.movie.getAllPopular().then(res => {
					state.popularMovies = res
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
					{ title: 'По подписке' },
					{ title: 'Дата создания' },
					{ title: 'Действия' }
				]}
			>
				{snap?.movies?.map((item, index) => (
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
