import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Header from '../../components/Header/Header'
import PageHeader from '../../components/PageHeader/PageHeader'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'

import s from './Auth.module.scss'

const Index: FC = () => {
	const { t } = useTranslation()

	const {
		register,
		formState: { errors }
	} = useForm<{ username: string; email: string; password: string }>()

	const [isRegister] = useState(false)

	return (
		<>
			<Header />
			<PageHeader>{isRegister ? t('Registration') : t('Login')}</PageHeader>
			<div className='container'>
				<div className={s.login}>
					<form className={s.form}>
						{isRegister && (
							<div key='animatedComponent' className={s.item}>
								<label>{t('Username')}:</label>
								<input
									{...register('username', {
										required: t('This field is required')
									})}
								/>
								{errors.username && (
									<div className='error'>{errors.username.message}</div>
								)}
							</div>
						)}
						<div className={s.item}>
							<label>{t('Email')}:</label>
							<MyInput />
							{errors.email && (
								<div className='error'>{errors.email.message}</div>
							)}
						</div>
						<div className={s.item}>
							<label>{t('Password')}:</label>
							<MyInput />
							{errors.password && (
								<div className='error'>{errors.password.message}</div>
							)}
						</div>
						{isRegister ? (
							<MyButton>{t('Sign up')}</MyButton>
						) : (
							<MyButton>{t('Sign in')}</MyButton>
						)}
					</form>
				</div>
			</div>
		</>
	)
}

export default Index
