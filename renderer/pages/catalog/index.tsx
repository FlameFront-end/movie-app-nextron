import { ReactNode } from 'react'

import { NextPageWithLayout } from '../_app'

import PageHeader from '../../components/PageHeader/PageHeader'

import Layout from '../../layouts/Layout'

const CatalogPage: NextPageWithLayout = () => {
	return (
		<>
			<PageHeader>Movies</PageHeader>
			<div className='container'>
				<div className='section mb-3'>MovieGrid</div>
			</div>
		</>
	)
}

CatalogPage.getLayout = (page: ReactNode) => {
	return <Layout title='Catalog'>{page}</Layout>
}

export default CatalogPage
