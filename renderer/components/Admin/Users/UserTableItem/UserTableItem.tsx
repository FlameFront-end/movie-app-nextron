import { FC } from 'react'
import { User } from '../../../../api/auth/auth.dto'
import { formatDate } from '../../../../utils/formatDate'
import s from './UserTableItem.module.scss'

interface MovieTableItem {
	user: User
}

const UserTableItem: FC<MovieTableItem> = ({ user }) => {
	return (
		<tr className={s.wrapper}>
			<td>{user.id}</td>
			<td>
				<div className={s.image_block}>
					<img src={user.ava} className={s.image} alt='ava' />
				</div>
			</td>
			<td>{user.nick}</td>
			<td>{user.email}</td>
			<td>
				{user.isAdmin ? (
					<span className='green'>Да</span>
				) : (
					<span className='red'>Нет</span>
				)}
			</td>
			<td>{formatDate(user.createdAt)}</td>
		</tr>
	)
}

export default UserTableItem
