import { ReactNode, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { NextPageWithLayout } from '../_app'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import UploadImage from '../../components/UploadImage/UploadImage'
import Layout from '../../layouts/Layout'
import { handleError, handleSuccess } from '../../utils/authHandlers'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import s from './Register.module.scss'

const RegisterPage: NextPageWithLayout = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		image: null
	})

	const handleSubmit = async e => {
		e.preventDefault()

		const preparedData = {
			...data,
			email: data.email?.trim(),
			password: data.password?.trim()
		}

		const { email, password } = preparedData

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

		if (!password.trim()) {
			return showErrorSnackbar({
				message: 'Пароль не указан',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		if (!(password.trim().length < 6)) {
			return showErrorSnackbar({
				message: 'Пароль не может быть меньше 6 симолов',
				tryAgainMessage: ', пожалуйста, повторите попытку.'
			})
		}

		// handleSuccess(data, 'Account has been created')
	}

	const onHandleChange = (value, key) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<h1 className={s.title}>Регистрация</h1>
				<form onSubmit={handleSubmit} className={s.form}>
					<MyInput
						label='Email'
						type='text'
						id='email'
						name='email'
						onChange={e => onHandleChange(e.target.value, 'email')}
						value={data.email}
						className={s.input}
					/>
					<UploadImage setData={setData} image={data.image} />
					<MyInput
						label='Пароль'
						type='password'
						id='password'
						name='password'
						onChange={e => onHandleChange(e.target.value, 'password')}
						value={data.password}
						className={s.input}
					/>
					<MyButton type='submit'>Зарегистрироваться</MyButton>
				</form>
			</div>
			<ToastContainer position='bottom-left' autoClose={2000} />
		</div>
	)
}

RegisterPage.getLayout = (page: ReactNode) => {
	return <Layout title='Catalog'>{page}</Layout>
}

export default RegisterPage
