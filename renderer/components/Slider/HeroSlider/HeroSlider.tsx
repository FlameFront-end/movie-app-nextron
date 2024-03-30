import { FC, useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Api from '../../../api'
import { CreateResponseMovieDto } from '../../../api/movie/movie.dto'
import Modal from '../../ui/Modal/Modal'
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

	console.log('activeModal', activeModal)

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
				<Modal
					key={index}
					isOpen={activeModal}
					className={s.modal}
					onClose={() => setActiveModal(false)}
				>
					<iframe
						height='500px'
						title='trailer'
						width='100%'
						src={item.trailerVideo}
					></iframe>
				</Modal>
			))}
		</div>
	)
}

export default HeroSlider
