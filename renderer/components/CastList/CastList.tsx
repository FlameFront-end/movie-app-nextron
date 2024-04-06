import { FC, useState } from 'react'
import s from './CastList.module.scss'

interface CastListProps {
	id: number
}

const CastList: FC<CastListProps> = ({ id }) => {
	const [casts, setCasts] = useState([
		{
			name: 'name'
		},
		{
			name: 'name'
		},
		{
			name: 'name'
		}
	])

	console.log('id', id)

	return (
		<div className={s.casts}>
			{casts.map((item, index) => (
				<div className={s.item} key={index}>
					<div
						className={s.img}
						style={{
							backgroundImage: ``
						}}
					></div>
					<p className={s.name}>{item.name}</p>
				</div>
			))}
		</div>
	)
}

export default CastList
