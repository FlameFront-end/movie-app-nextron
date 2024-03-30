import { FC } from 'react'
import Table from '../../ui/Table/Table'
import MovieTableItem from '../MovieTableItem/MovieTableItem'
import s from './MoviesTable.module.scss'

const MoviesTable: FC = () => {
	const arrTest = [1, 2, 3, 4]

	return (
		<div className={s.wrapper}>
			<Table
				thead={[
					{ title: 'Главное изображение' },
					{ title: 'Название' },
					{ title: 'Описание' },
					{ title: 'Актёры' },
					{ title: 'Действия' }
				]}
			>
				{arrTest.map((item, index) => (
					<MovieTableItem item={item} key={index} />
				))}
			</Table>
		</div>
	)
}

export default MoviesTable
