import { FC } from 'react'

import { Actor } from '../../../../api'
import { formatDate } from '../../../../utils'

import s from './ActorTableItem.module.scss'

interface MovieTableItem {
	actor: Actor
	handleDelete: (id: number) => void
}

const ActorTableItem: FC<MovieTableItem> = ({ actor, handleDelete }) => {
	return (
		<tr className={s.wrapper}>
			<td>
				<div className={s.image_block}>
					<img src={actor.ava} className={s.image} alt='ava' />
				</div>
			</td>
			<td>{actor.fullName}</td>
			<td>{formatDate(actor.createdAt)}</td>
			<td>
				<div className={s.actions_block}>
					<button onClick={() => handleDelete(actor.id)}>Удалить</button>
					<button>Редактировать</button>
				</div>
			</td>
		</tr>
	)
}

export default ActorTableItem
