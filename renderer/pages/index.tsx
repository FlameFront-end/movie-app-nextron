import Link from 'next/link'
import { NextPageWithLayout } from './_app'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import MovieList from '../components/MovieList/MovieList'
import { OutlineButton } from '../components/ui/MyButton/MyButton'

const HomePage: NextPageWithLayout = () => {
	return (
		<div className='main-page'>
			<div className='top'>
				<Header />
				<main>
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
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default HomePage
