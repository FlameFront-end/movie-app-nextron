import { FC, useEffect, useState } from 'react'
import * as Api from '../../../../api'
import { User } from '../../../../api/auth/auth.dto'
import Table from '../../../ui/Table/Table'
import UserTableItem from '../UserTableItem/UserTableItem'
import s from './UsersTable.module.scss'

const UsersTable: FC = () => {
	const [allUsers, setAllUsers] = useState<User[]>([])

	useEffect(() => {
		Api.user.getAll().then(res => {
			console.log('yes')
			setAllUsers(res)
		})
	}, [])

	console.log('allUsers', allUsers)

	return (
		<div className={s.wrapper}>
			<Table
				thead={[
					{ title: 'ID' },
					{ title: 'Аватарка' },
					{ title: 'Никнейм' },
					{ title: 'Email' },
					{ title: 'Админ' },
					{ title: 'Дата регистрации' }
				]}
			>
				{allUsers.map((item, index) => (
					<UserTableItem user={item} key={index} />
				))}
			</Table>
		</div>
	)
}

export default UsersTable
