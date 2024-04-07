import React, { FC } from 'react'
import { useSnapshot } from 'valtio'

import { state } from '../../../../state'
import { Table, UserTableItem } from '../../../index'

import s from './UsersTable.module.scss'

const UsersTable: FC = () => {
	const snap = useSnapshot(state)

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
				{snap.users.map((item, index) => (
					<UserTableItem user={item} key={index} />
				))}
			</Table>
		</div>
	)
}

export default UsersTable
