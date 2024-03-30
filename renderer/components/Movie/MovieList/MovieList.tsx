import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import MovieCard from '../MovieCard/MovieCard'

import s from './MovieList.module.scss'

const MovieList: FC = () => {
	const items = [1, 2, 3, 4, 5, 6, 7, 8]
	return (
		<div className={s.movieList}>
			<Swiper grabCursor={true} slidesPerView={'auto'} spaceBetween={10}>
				{items.map(i => (
					<SwiperSlide key={i} className={s.swiperSlide}>
						<MovieCard
							backgroundImgUrl='https://w.forfun.com/fetch/03/03f8cd3f6796daaacc1fe43ffb7704b7.jpeg'
							category='test'
							id={i}
							name='sdfsd'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default MovieList
