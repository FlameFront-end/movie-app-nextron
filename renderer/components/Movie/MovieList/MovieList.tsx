import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSnapshot } from 'valtio'

import { Movie } from '../../../api'
import { state } from '../../../state'
import { MovieCard, MovieCardSkeleton } from '../../index'

import s from './MovieList.module.scss'

type Sort = 'createdAt' | 'popular' | 'favorites' | 'search'

interface MovieListProps {
	sort?: Sort
}

const MovieList: FC<MovieListProps> = ({ sort = 'createdAt' }) => {
	const snap = useSnapshot(state)
	const [movies, setMovies] = useState<Movie[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (sort === 'createdAt') {
			// @ts-ignore
			setMovies(snap.movies)
			setIsLoading(false)
		}

		if (sort === 'popular') {
			// @ts-ignore
			setMovies(snap.popularMovies)
			setIsLoading(false)
		}

		if (sort === 'favorites') {
			// @ts-ignore
			setMovies(snap.user?.favorites)
			setIsLoading(false)
		}

		if (sort === 'search') {
			// @ts-ignore
			setMovies(snap.searchMovies)
			setIsLoading(false)
		}
	}, [
		snap.movies,
		snap.popularMovies,
		snap.searchMovies,
		snap.user?.favorites,
		sort
	])

	return (
		<div className={s.movieList}>
			<Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={10}>
				{isLoading ? (
					<>
						{movies?.map((item, index) => (
							<SwiperSlide key={index} className={s.swiperSlide}>
								<MovieCard
									backgroundImgUrl={item.posterImage}
									category='test'
									id={item.id}
									title={item.title}
								/>
							</SwiperSlide>
						))}
						{new Array(10).fill(null).map((item, index) => (
							<SwiperSlide key={index} className={s.swiperSlide}>
								<MovieCardSkeleton items={1} />
							</SwiperSlide>
						))}
					</>
				) : (
					<>
						{movies?.map((item, index) => (
							<SwiperSlide key={index} className={s.swiperSlide}>
								<MovieCard
									backgroundImgUrl={item.posterImage}
									category='test'
									id={item.id}
									title={item.title}
								/>
							</SwiperSlide>
						))}
					</>
				)}
			</Swiper>
		</div>
	)
}

export default MovieList
