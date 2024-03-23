import Link from 'next/link'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './_app'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import MovieList from '../components/MovieList/MovieList'
import { OutlineButton } from '../components/ui/MyButton/MyButton'
import Layout from '../layouts/Layout'

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<section>
				<HeroSlider />
				<div className='container'>
					<div className='section mb-3'>
						<div className='section__header mb-2'>
							<h2>Trending Movies</h2>
							<Link href='/'>
								<OutlineButton className='small'>View more</OutlineButton>
							</Link>
						</div>
						<MovieList />
					</div>

					<div className='section mb-3'>
						<div className='section__header mb-2'>
							<h2>Top Rated Movies</h2>
							<Link href='/'>
								<OutlineButton className='small'>View more</OutlineButton>
							</Link>
						</div>
						<MovieList />
					</div>

					<div className='section mb-3'>
						<div className='section__header mb-2'>
							<h2>Trending TV</h2>
							<Link href='/'>
								<OutlineButton className='small'>View more</OutlineButton>
							</Link>
						</div>
						<MovieList />
					</div>

					<div className='section mb-3'>
						<div className='section__header mb-2'>
							<h2>Top Rated TV</h2>
							<Link href='/'>
								<OutlineButton className='small'>View more</OutlineButton>
							</Link>
						</div>
						<MovieList />
					</div>
				</div>
			</section>
		</>
	)
}

HomePage.getLayout = (page: ReactNode) => {
	return <Layout title='Home'>{page}</Layout>
}

export default HomePage
