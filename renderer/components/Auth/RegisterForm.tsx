import React, { useState } from 'react'
import * as Api from '../../api'
import { handleError, handleSuccess } from '../../utils/authHandlers'
import MyButton from '../ui/MyButton/MyButton'
import MyInput from '../ui/MyInput/MyInput'
import UploadImage from '../UploadImage/UploadImage'
import s from './Auth.module.scss'

const RegisterForm: React.FC = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		image: null
	})

	const handleSubmit = async () => {
		try {
			const data = await Api.auth.register([])
			handleSuccess(data, 'Account has been created')
		} catch (err) {
			handleError(err as Error)
		}
	}

	const onHandleChange = (value, key) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	return (
		<div className={s.container}>
			<h1 className={s.title}>Регистрация</h1>
			<form onSubmit={handleSubmit} className={s.form}>
				<div className={s.formGroup}>
					<label htmlFor='email' className={s.label}>
						Email:
					</label>
					<MyInput
						type='text'
						id='email'
						name='email'
						onChange={e => onHandleChange(e.target.value, 'email')}
						value={data.email}
						className={s.input}
					/>
				</div>
				<UploadImage setData={setData} image={data.image} />
				<div className={s.formGroup}>
					<label htmlFor='password' className={s.label}>
						Пароль:
					</label>
					<MyInput
						type='password'
						id='password'
						name='password'
						onChange={e => onHandleChange(e.target.value, 'password')}
						value={data.password}
						className={s.input}
					/>
				</div>
				<MyButton type='submit'>Зарегистрироваться</MyButton>
			</form>
		</div>
	)
}

export default RegisterForm
