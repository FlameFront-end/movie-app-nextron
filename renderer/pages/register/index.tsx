import { NextPage } from 'next'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import UploadImage from '../../components/UploadImage/UploadImage'
import * as Api from '../../api'
import { RegisterFormDTO } from '../../api/dto/auth.dto'
import Curve from '../../layouts/Curve'
import { handleSuccess } from '../../utils/authHandlers'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import s from './Register.module.scss'

const RegisterPage: NextPage = () => {
	const [data, setData] = useState<RegisterFormDTO>({
		nick: '',
		email: '',
		password: '',
		password_confir: '',
		ava: null
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const preparedData = {
			...data,
			email: data.email?.trim(),
			password: data.password?.trim(),
			nick: data.nick?.trim()
		}

		const { email, password, password_confir, nick } = preparedData

		if (!email.trim()) {
			return showErrorSnackbar({
				message: 'Почта не указана',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (!(email.indexOf('@') >= 0)) {
			return showErrorSnackbar({
				message: 'Почта указана некорретно',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (!nick.trim()) {
			return showErrorSnackbar({
				message: 'Никнейм не указан',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (!password.trim()) {
			return showErrorSnackbar({
				message: 'Пароль не указан',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (password !== password_confir) {
			return showErrorSnackbar({
				message: 'Пароли не совпадают',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (password.trim().length < 6) {
			return showErrorSnackbar({
				message: 'Пароль не может быть меньше 6 симолов',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		const res = await Api.auth.register(data)
		handleSuccess(res, 'Successful account login')
	}

	const onHandleChange = (value, key) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<Curve>
			<div className={s.wrapper}>
				<div className={s.container}>
					<h1 className={s.title}>Регистрация</h1>
					<form onSubmit={handleSubmit} className={s.form}>
						<div className={s.row}>
							<MyInput
								width='100%'
								label='Email'
								type='text'
								id='email'
								name='email'
								onChange={e => onHandleChange(e.target.value, 'email')}
								value={data.email}
								className={s.input}
							/>
							<MyInput
								width='100%'
								label='Никнейм'
								type='nick'
								id='nick'
								name='nick'
								onChange={e => onHandleChange(e.target.value, 'nick')}
								value={data.nick}
								className={s.input}
							/>
						</div>
						<div className={s.row}>
							<MyInput
								width='100%'
								label='Пароль'
								type='password'
								id='password'
								name='password'
								onChange={e => onHandleChange(e.target.value, 'password')}
								value={data.password}
								className={s.input}
							/>
							<MyInput
								width='100%'
								label='Подтверждение пароля'
								type='password'
								id='password_confir'
								name='password_confir'
								onChange={e =>
									onHandleChange(e.target.value, 'password_confir')
								}
								value={data.password_confir}
								className={s.input}
							/>
						</div>
						<UploadImage setData={setData} ava={data.ava} />
						<MyButton type='submit'>Зарегистрироваться</MyButton>
					</form>
				</div>
				<ToastContainer position='bottom-left' autoClose={2000} />
			</div>
		</Curve>
	)
}

export default RegisterPage
