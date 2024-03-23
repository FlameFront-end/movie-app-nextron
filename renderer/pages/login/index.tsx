import React, { ReactNode, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { NextPageWithLayout } from '../_app'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import * as Api from '../../api'
import { LoginFormDTO } from '../../api/dto/auth.dto'
import Layout from '../../layouts/Layout'
import { handleError, handleSuccess } from '../../utils/authHandlers'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import s from './Login.module.scss'

const LoginPage: NextPageWithLayout = () => {
	const [data, setData] = useState<LoginFormDTO>({
		email: '',
		password: ''
	})

	const handleSubmit = async e => {
		try {
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

			const res = await Api.auth.login(data)
			handleSuccess(res, 'Successful account login')
		} catch (err) {
			handleError(err as Error)
		}
	}

	const onHandleChange = (value: string, key: any) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<h1 className={s.title}>Авторизация</h1>
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
					<MyInput
						label='Пароль'
						type='password'
						id='password'
						name='password'
						onChange={e => onHandleChange(e.target.value, 'password')}
						value={data.password}
						className={s.input}
					/>
					<MyButton type='submit'>Войти</MyButton>
				</form>
			</div>
			<ToastContainer position='bottom-left' autoClose={2000} />
		</div>
	)
}

LoginPage.getLayout = (page: ReactNode) => {
	return <Layout title='Catalog'>{page}</Layout>
}

export default LoginPage
