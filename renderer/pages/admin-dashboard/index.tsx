import { NextPageWithLayout } from '../_app'
import Layout from '../../layouts/Layout'

const AdminDashboard: NextPageWithLayout = () => {
	return <div>AdminDashboard</div>
}

AdminDashboard.getLayout = page => {
	return <Layout title='Admin Dashboard'>{page}</Layout>
}

export default AdminDashboard
