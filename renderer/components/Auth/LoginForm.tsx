import { useFormik } from 'formik'
import { FC } from 'react'
import * as yup from 'yup'

import * as Api from '../../api'
import { LoginFormDTO } from '../../api/dto/auth.dto'
import { handleError, handleSuccess } from '../../utils/authHandlers'
import MyButton from '../ui/MyButton/MyButton'
import MyInput from '../ui/MyInput/MyInput'

import s from './Auth.module.scss'

export const LoginForm: FC = () => {
	const handleSubmit = async (values: LoginFormDTO) => {
		try {
			const data = await Api.auth.login(values)
			handleSuccess(data, 'Successful account login')
		} catch (err) {
			handleError(err)
		}
	}

	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object({
			email: yup
				.string()
				.email('Некорректный адрес электронной почты')
				.required('Обязательное поле'),
			password: yup
				.string()
				.min(6, 'Пароль должен содержать не менее 6 символов')
				.required('Обязательное поле')
		}),
		onSubmit: values => {
			handleSubmit(values)
		}
	})

	return (
		<div className={s.container}>
			<h1 className={s.title}>Авторизация</h1>
			<form onSubmit={formik.handleSubmit} className={s.form}>
				<div className={s.formGroup}>
					<label htmlFor='email' className={s.label}>
						Email:
					</label>
					<MyInput
						type='text'
						id='email'
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						className={s.input}
					/>
					{formik.touched.email && formik.errors.email && (
						<div className={s.error}>{formik.errors.email}</div>
					)}
				</div>
				<div className={s.formGroup}>
					<label htmlFor='password' className={s.label}>
						Пароль:
					</label>
					<MyInput
						type='password'
						id='password'
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						className={s.input}
					/>
					{formik.touched.password && formik.errors.password && (
						<div className={s.error}>{formik.errors.password}</div>
					)}
				</div>
				<MyButton type='submit'>Войти</MyButton>
			</form>
		</div>
	)
}
