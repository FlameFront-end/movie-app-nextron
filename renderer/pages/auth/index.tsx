import { Tabs } from 'antd'
import { ToastContainer } from 'react-toastify'

import { NextPageWithLayout } from '../_app'

import { LoginForm } from '../../components/Auth/LoginForm'
import RegisterForm from '../../components/Auth/RegisterForm'

import Layout from '../../layouts/Layout'

import s from './Auth.module.scss'

import 'react-toastify/dist/ReactToastify.min.css'

const AuthPage: NextPageWithLayout = () => {
	return (
		<>
			<div className={s.wrapper}>
				<Tabs
					items={[
						{
							label: 'Войти',
							key: '1',
							children: <LoginForm />
						},
						{
							label: 'Регистрация',
							key: '2',
							children: <RegisterForm />
						}
					]}
				/>
			</div>
			<ToastContainer position='bottom-left' autoClose={2000} />
		</>
	)
}

AuthPage.getLayout = page => {
	return <Layout title='Authorization'>{page}</Layout>
}

export default AuthPage
