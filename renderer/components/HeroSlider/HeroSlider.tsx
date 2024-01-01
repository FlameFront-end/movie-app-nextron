import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import HeroSlide from '../HeroSlide/HeroSlide'
import Modal from '../ui/Modal/Modal'

import s from './HeroSlider.module.scss'

const movieItems = [1, 2, 3, 4]

const HeroSlider: FC = () => {
	return (
		<div className={s.heroSlider}>
			<Swiper grabCursor={true} spaceBetween={0} slidesPerView={1}>
				{movieItems.map(i => (
					<SwiperSlide key={i} className={s.slide}>
						{({ isActive }) => (
							<HeroSlide className={`${isActive ? 'active' : ''}`} />
						)}
					</SwiperSlide>
				))}
			</Swiper>

			{movieItems.map((_item, index) => (
				<TrailerModal key={index} />
			))}
		</div>
	)
}

const TrailerModal: FC = () => {
	return (
		<Modal active={false} id={`modal_1`}>
			<iframe height='500px' title='trailer' width='100%'></iframe>
		</Modal>
	)
}

export default HeroSlider
