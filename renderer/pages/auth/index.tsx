import { Tabs } from 'antd'
import Head from 'next/head'

import { NextPageWithLayout } from '../_app'

import { LoginForm } from '../../components/Auth/LoginForm'
import RegisterForm from '../../components/Auth/RegisterForm'

import Layout from '../../layouts/Layout'

import s from './Auth.module.scss'

const AuthPage: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Auth</title>
			</Head>
			<main style={{ width: 400, margin: '50px auto' }}>
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
			</main>
		</>
	)
}

// AuthPage.getLayout = page => {
// 	return <Layout title='Authorization'>{page}</Layout>
// }

export default AuthPage
