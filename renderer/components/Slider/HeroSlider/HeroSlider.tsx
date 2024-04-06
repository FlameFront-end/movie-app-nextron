import { FC, useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Api from '../../../api'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import ModalTrailer from '../../ui/Modals/ModalTrailer/ModalTrailer'
import HeroSlide from '../HeroSlide/HeroSlide'
import s from './HeroSlider.module.scss'

const HeroSlider: FC = () => {
	const [movies, setMovies] = useState<CreateResponseMovieDto[]>([])
	const [activeModal, setActiveModal] = useState(false)

	useEffect(() => {
		Api.movie.getAll().then(res => {
			setMovies(res)
		})
	}, [])

	return (
		<div className={s.heroSlider}>
			<Swiper
				autoplay={{
					delay: 4000
				}}
				loop={true}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Autoplay]}
			>
				{movies.map((movie, index) => (
					<SwiperSlide key={index} className={s.slide}>
						{({ isActive }) => (
							<HeroSlide
								setActiveModal={setActiveModal}
								movie={movie}
								isActive={isActive}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>

			{movies.map((item, index) => (
				<ModalTrailer
					key={index}
					isOpen={activeModal}
					className={s.modal}
					onClose={() => setActiveModal(false)}
					trailerSrc={item.trailerVideo}
				/>
			))}
		</div>
	)
}

export default HeroSlider
