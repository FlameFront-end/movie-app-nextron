import { FC } from 'react'
import s from './MovieTableItem.module.scss'

interface MovieTableItem {
	item: any
}

const MovieTableItem: FC<MovieTableItem> = ({ item }) => {
	return (
		<tr className={s.wrapper}>
			<td>1</td>
			<td>1</td>
			<td>1</td>
			<td>1</td>
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
