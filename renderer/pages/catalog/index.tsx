import { NextPage } from 'next'
import PageHeader from '../../components/PageHeader/PageHeader'
import Curve from '../../layouts/Curve'

const CatalogPage: NextPage = () => {
	return (
		<Curve>
			<PageHeader>Movies</PageHeader>
			<div className='container'>
				<div className='section mb-3'>MovieGrid</div>
			</div>
		</Curve>
	)
}

export default CatalogPage
