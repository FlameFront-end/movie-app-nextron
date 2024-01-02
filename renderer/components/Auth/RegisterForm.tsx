import { Button, Form, Input, notification } from 'antd'
import { setCookie } from 'nookies'
import { FC } from 'react'

import * as Api from '../../api'
import { RegisterFormDTO } from '../../api/dto/auth.dto'

import s from './Auth.module.scss'

const RegisterForm: FC = () => {
	const handleSuccess = (data: any) => {
		notification.success({
			message: 'Успешно!',
			description: 'Переходим на домашнюю страницу...',
			duration: 2
		})

		setCookie(null, '_token', data.token, {
			path: '/'
		})

		location.href = '/'
	}

	const handleError = (err: Error) => {
		const errorMessage = err.message || 'Ошибка при регистрации'
		notification.error({
			message: 'Ошибка!',
			description: errorMessage,
			duration: 2
		})
	}

	const onSubmit = async (values: RegisterFormDTO) => {
		try {
			const data = await Api.auth.register(values)
			handleSuccess(data)
		} catch (err) {
			handleError(err as Error)
		}
	}

	return (
		<div className={s.formBlock}>
			<Form
				name='basic'
				labelCol={{
					span: 8
				}}
				onFinish={onSubmit}
			>
				<Form.Item
					label='E-Mail'
					name='email'
					rules={[
						{
							required: true,
							message: 'Укажите почту'
						}
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Пароль'
					name='password'
					rules={[
						{
							required: true,
							message: 'Укажите пароль'
						}
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16
					}}
				>
					<Button type='primary' htmlType='submit'>
						Регистрация
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default RegisterForm
