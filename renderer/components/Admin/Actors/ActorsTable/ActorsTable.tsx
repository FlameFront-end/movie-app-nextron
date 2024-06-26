import { FC, FormEvent, useState } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../../../api'
import { CreateActorDTO } from '../../../../api'
import { state } from '../../../../state'
import { showErrorSnackbar, showSuccessSnackbar } from '../../../../utils'
import { ActorTableItem, Input, Table, UploadFile } from '../../../index'

import s from './ActorsTable.module.scss'

const ActorsTable: FC = () => {
	const snap = useSnapshot(state)

	const [data, setData] = useState<CreateActorDTO>({
		fullName: '',
		ava: null
	})

	const handleDelete = (id: number) => {
		Api.actor
			.remove(id)
			.then(() => {
				Api.actor.getAll().then(res => {
					state.actors = res
				})
				showSuccessSnackbar(`Актёр был успешно удалён`)
			})
			.catch(err => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
				console.error(err)
			})
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const preparedData = {
			...data,
			fullName: data.fullName?.trim()
		}

		const { fullName, ava } = preparedData

		if (!fullName.trim()) {
			return showErrorSnackbar({
				message: 'Полное имя не указано'
			})
		}

		if (!ava) {
			return showErrorSnackbar({
				message: 'Фото не загружено'
			})
		}

		await Api.actor
			.create(data)
			.then(() => {
				showSuccessSnackbar(`Актёр ${data.fullName} успешно создан`)
				setData({
					fullName: '',
					ava: null
				})
				Api.actor.getAll().then(res => {
					state.actors = res
				})
			})
			.catch(err => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
				console.error(err)
			})
	}

	const onHandleChange = (value: File | string, key: string) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<div className={s.wrapper}>
			<form onSubmit={handleSubmit} className={s.form}>
				<UploadFile
					setValue={(value: File) => onHandleChange(value, 'ava')}
					file={data.ava}
					id='ava'
					placeholder='Фото'
					className={s.file}
				/>
				<Input
					onChange={e => onHandleChange(e.target.value, 'fullName')}
					name='fullName'
					value={data.fullName}
					placeholder='Полное имя'
				/>
				<button className={s.btn}>Создать</button>
			</form>

			<Table
				thead={[
					{ title: 'Аватарка' },
					{ title: 'Полное имя' },
					{ title: 'Дата создания' },
					{ title: 'Действия' }
				]}
			>
				{snap.actors.map((item, index) => (
					<ActorTableItem
						handleDelete={handleDelete}
						actor={item}
						key={index}
					/>
				))}
			</Table>
		</div>
	)
}

export default ActorsTable
