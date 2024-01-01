import { ReactNode } from 'react'

import { NextPageWithLayout } from '../_app'

import Layout from '../../layouts/Layout'

const MoviesPage: NextPageWithLayout = () => {
	return <div>movies</div>
}

MoviesPage.getLayout = (page: ReactNode) => {
	return <Layout title='Movies'>{page}</Layout>
}

export default MoviesPage
