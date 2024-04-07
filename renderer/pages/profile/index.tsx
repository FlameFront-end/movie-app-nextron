import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSnapshot } from 'valtio'
import Input from '../../components/Form/Input/Input'
import MovieList from '../../components/Movie/MovieList/MovieList'
import Modal from '../../components/ui/Modals/Modal/Modal'
import * as Api from '../../api'
import Curve from '../../layouts/Curve'
import { state } from '../../state'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../utils/successSnackbar'
import s from './Profile.module.scss'

const Profile: NextPage = () => {
	const { push } = useRouter()
	const snap = useSnapshot(state)
	const [isEditAva, setIsEditAva] = useState(false)
	const [isEditPassword, setIsEditPassword] = useState(false)

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')

	const handleEditPassword = async () => {
		if (!newPassword.trim()) {
			return showErrorSnackbar({
				message: 'Пароль не указан'
			})
		}

		if (newPassword.trim().length < 6) {
			return showErrorSnackbar({
				message: 'Пароль не может быть меньше 6 симолов'
			})
		}
		await Api.auth
			.resetPassword({
				old_password: oldPassword,
				new_password: newPassword
			})
			.then(() => {
				showSuccessSnackbar('Пароль изменён успешно')
			})
			.catch(() => {
				return showErrorSnackbar({
					message: 'Старый пароль не верный'
				})
			})
	}

	const handleLogout = () => {
		push('/login')

		showSuccessSnackbar('Успешный выход из аккаунта')

		setTimeout(() => {
			Api.auth.logout()
			state.user = null
		}, 500)
	}

	console.log('snap.user', snap.user)

	return (
		<Curve>
			<div className='wrapper'>
				<div className={s.container}>
					<div className={s.wrapper}>
						<div className={s.column}>
							<Image
								className={s.ava}
								src={snap.user?.ava}
								alt='ava'
								width={200}
								height={200}
							/>
							<button
								onClick={() => setIsEditAva(prevState => !prevState)}
								className={s.edit}
							>
								Изменить аватарку
							</button>
						</div>
						<div className={s.column}>
							<div className={s.row}>
								<div className={s.item}>
									<div className={s.label}>Никнейм</div>
									<div className={s.content}>{snap.user?.nick}</div>
								</div>
								<div className={s.item}>
									<div className={s.label}>Админ</div>
									<div
										className={`${s.content} ${
											snap.user?.isAdmin ? 'green' : 'red'
										}`}
									>
										{snap.user?.isAdmin ? 'Да' : 'Нет'}
									</div>
								</div>
							</div>
							<div className={s.item}>
								<div className={s.label}>Email</div>
								<div className={s.content}>{snap.user?.email}</div>
							</div>
							<div className={s.item}>
								<div className={s.row}>
									<button
										onClick={() => setIsEditPassword(prevState => !prevState)}
										className={s.edit}
									>
										Изменить пароль
									</button>

									<button onClick={handleLogout} className={s.logout}>
										Выход
									</button>
								</div>
							</div>
						</div>
					</div>

					<Modal
						isOpen={isEditPassword}
						onClose={() => setIsEditPassword(false)}
					>
						<div className={s.edit_password}>
							<h2 className={s.title_edit}>Изменить пароль</h2>
							<form onSubmit={handleEditPassword}>
								<div className={s.row}>
									<Input
										onChange={e => setOldPassword(e.target.value)}
										name='old_password'
										type='password'
										value={oldPassword}
										label='Старый пароль'
									/>
									<Input
										onChange={e => setNewPassword(e.target.value)}
										name='new_password'
										type='password'
										value={newPassword}
										label='Новый пароль'
									/>
								</div>
								<button type='submit' className={s.edit}>
									Изменить пароль
								</button>
							</form>
						</div>
					</Modal>
				</div>
				<div className={s.list}>
					<h3 className={s.heading_list}>Вам понравились:</h3>
					<MovieList sort='favorites' />
				</div>
			</div>
		</Curve>
	)
}

export default Profile
