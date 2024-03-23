import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { useSnapshot } from 'valtio'
import { NextPageWithLayout } from '../_app'
import Modal from '../../components/ui/Modal/Modal'
import MyInput from '../../components/ui/MyInput/MyInput'
import * as Api from '../../api'
import Layout from '../../layouts/Layout'
import { state } from '../../state'
import { handleSuccess } from '../../utils/authHandlers'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import s from './Profile.module.scss'

const Profile: NextPageWithLayout = () => {
	const snap = useSnapshot(state)
	const [isEditAva, setIsEditAva] = useState(false)
	const [isEditPassword, setIsEditPassword] = useState(false)

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')

	const handleEditPassword = async () => {
		if (!newPassword.trim()) {
			return showErrorSnackbar({
				message: 'Пароль не указан',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (newPassword.trim().length < 6) {
			return showErrorSnackbar({
				message: 'Пароль не может быть меньше 6 симолов',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}
		await Api.auth
			.resetPassword({
				old_password: oldPassword,
				new_password: newPassword
			})
			.then(res => {
				handleSuccess(res, 'Successful reset password')
			})
			.catch(e => {
				return showErrorSnackbar({
					message: 'Старый пароль не верный',
					tryAgainMessage: ', пожалуйста, повторите попытку.'
				})
			})
	}

	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.column}>
					<Image
						className={s.ava}
						src={`http://localhost:4000/uploads/ava/${snap.user?.ava}`}
						alt='ava'
						width={200}
						height={200}
					/>
					<button
						onClick={() => setIsEditAva(prevState => !prevState)}
						className={s.edit}
					>
						Edit avatar
					</button>
				</div>
				<div className={s.column}>
					<div className={s.item}>
						<div className={s.label}>Nickname</div>
						<div className={s.content}>{snap.user?.nick}</div>
					</div>
					<div className={s.item}>
						<div className={s.label}>Email</div>
						<div className={s.content}>{snap.user?.email}</div>
					</div>
					<div className={s.item}>
						<button
							onClick={() => setIsEditPassword(prevState => !prevState)}
							className={s.edit}
						>
							Edit password
						</button>
					</div>
				</div>
			</div>

			<Modal isOpen={isEditPassword} onClose={() => setIsEditPassword(false)}>
				<div className={s.edit_password}>
					<h2 className={s.title_edit}>Edit password</h2>
					<div className={s.row}>
						<MyInput
							onChange={e => setOldPassword(e.target.value)}
							name='old_password'
							type='password'
							value={oldPassword}
							label='Old password'
						/>
						<MyInput
							onChange={e => setNewPassword(e.target.value)}
							name='new_password'
							type='password'
							value={newPassword}
							label='New password'
						/>
					</div>
					<button onClick={handleEditPassword} className={s.edit}>
						Edit password
					</button>
				</div>
			</Modal>
		</div>
	)
}

Profile.getLayout = (page: ReactNode) => {
	return <Layout title='Profile'>{page}</Layout>
}

export default Profile
