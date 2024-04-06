import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Api from '../../../api'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import MovieCard from '../MovieCard/MovieCard'
import s from './MovieList.module.scss'

const MovieList: FC = () => {
	const [movies, setMovies] = useState<CreateResponseMovieDto[]>([])

	useEffect(() => {
		Api.movie.getAll().then(res => {
			setMovies(res)
		})
	}, [])

	return (
		<div className={s.movieList}>
			<Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={10}>
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
			</Swiper>
		</div>
	)
}

export default MovieList
