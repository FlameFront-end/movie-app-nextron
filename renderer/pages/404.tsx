import { ReactNode } from 'react'

import { NextPageWithLayout } from './_app'

import Layout from '../layouts/Layout'

const ErrorPage: NextPageWithLayout = () => {
	return <div>404 Not Found</div>
}

ErrorPage.getLayout = (page: ReactNode) => {
	return <Layout title='404 Not Found'>{page}</Layout>
}

export default ErrorPage
