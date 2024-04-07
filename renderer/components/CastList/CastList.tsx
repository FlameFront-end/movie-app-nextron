import { FC } from 'react'

import { Actor } from '../../api'

import s from './CastList.module.scss'

interface CastListProps {
	actors: Actor[]
}

const CastList: FC<CastListProps> = ({ actors }) => {
	return (
		<div className={s.casts}>
			{actors.map((actor, index) => (
				<div className={s.item} key={index}>
					<div
						className={s.img}
						style={{
							backgroundImage: `url(${actor.ava})`
						}}
					></div>
					<p className={s.name}>{actor.fullName}</p>
				</div>
			))}
		</div>
	)
}

export default CastList
