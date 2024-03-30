import { NextPage } from 'next'
import Link from 'next/link'
import MovieList from '../components/Movie/MovieList/MovieList'
import HeroSlider from '../components/Slider/HeroSlider/HeroSlider'
import { OutlineButton } from '../components/ui/Button/Button'
import Curve from '../layouts/Curve'

const HomePage: NextPage = () => {
	return (
		<Curve>
			<div className='main-page'>
				<div className='top'>
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
			</div>
		</Curve>
	)
}

export default HomePage
