import Link from 'next/link'
import { FC } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import MovieList from '../components/MovieList/MovieList'
import { OutlineButton } from '../components/ui/MyButton/MyButton'

const Index: FC = () => {
	return (
		<>
			<Header />
			<HeroSlider />
			<section>
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
			<Footer />
		</>
	)
}

export default Index
