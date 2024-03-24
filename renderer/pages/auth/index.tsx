import { Tabs } from 'antd'
import { NextPage } from 'next'
import { ToastContainer } from 'react-toastify'
import Curve from '../../layouts/Curve'
import Layout from '../../layouts/Layout/Layout'
import { Index } from '../login'
import RegisterForm from '../register/RegisterForm'
import s from './Auth.module.scss'
import 'react-toastify/dist/ReactToastify.min.css'

const AuthPage: NextPage = () => {
	return (
		<Curve>
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
		</Curve>
	)
}

export default AuthPage
