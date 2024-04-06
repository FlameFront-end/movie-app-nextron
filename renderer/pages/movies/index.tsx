import { NextPage } from 'next'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import Curve from '../../layouts/Curve'

const MoviesPage: NextPage = () => {
	return (
		<Curve>
			<div className='wrapper'>
				<PageHeader>Movies</PageHeader>
				<div className='container'>
					<div className='section mb-3'>MovieGrid</div>
				</div>
			</div>
		</Curve>
	)
}

export default MoviesPage
