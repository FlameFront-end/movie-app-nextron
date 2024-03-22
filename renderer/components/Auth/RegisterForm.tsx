import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

import * as Api from '../../api'
import { RegisterFormDTO } from '../../api/dto/auth.dto'
import { handleError, handleSuccess } from '../../utils/authHandlers'
import MyButton from '../ui/MyButton/MyButton'
import MyInput from '../ui/MyInput/MyInput'

import s from './Auth.module.scss'

const RegisterForm: React.FC = () => {
	const handleSubmit = async (values: RegisterFormDTO) => {
		try {
			const data = await Api.auth.register(values)
			handleSuccess(data, 'Account has been created')
		} catch (err) {
			handleError(err as Error)
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
			<h1 className={s.title}>Регистрация</h1>
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
				<MyButton type='submit'>Зарегистрироваться</MyButton>
			</form>
		</div>
	)
}

export default RegisterForm
