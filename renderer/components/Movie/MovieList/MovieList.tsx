import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSnapshot } from 'valtio'
import * as Api from '../../../api'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import { state } from '../../../state'
import MovieCardSkeleton from '../../Skeletons/MovieCardSkeleton'
import MovieCard from '../MovieCard/MovieCard'
import s from './MovieList.module.scss'

type Sort = 'createdAt' | 'popular' | 'favorites'

interface MovieListProps {
	sort?: Sort
}

const MovieList: FC<MovieListProps> = ({ sort = 'createdAt' }) => {
	const snap = useSnapshot(state)
	const [movies, setMovies] = useState<CreateResponseMovieDto[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (sort === 'createdAt') {
			Api.movie.getAll().then(res => {
				setMovies(res)
				setIsLoading(false)
			})
		}

		if (sort === 'popular') {
			Api.movie.getAllPopular().then(res => {
				setMovies(res)
				setIsLoading(false)
			})
		}

		if (sort === 'favorites') {
			// @ts-ignore
			setMovies(snap.user?.favorites)
			setIsLoading(false)
		}
	}, [snap.user?.favorites, sort])

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
						{movies.map((item, index) => (
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
