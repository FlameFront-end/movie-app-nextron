import { Tabs } from 'antd'
import { ToastContainer } from 'react-toastify'
import { NextPageWithLayout } from '../_app'
import Layout from '../../layouts/Layout'
import { Index } from '../login'
import RegisterForm from '../register/RegisterForm'
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
							children: <Index />
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
