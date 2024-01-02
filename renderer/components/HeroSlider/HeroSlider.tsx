import { FC } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import HeroSlide from '../HeroSlide/HeroSlide'
import Modal from '../ui/Modal/Modal'

import s from './HeroSlider.module.scss'

const movieItems = [1, 2, 3, 4]

const HeroSlider: FC = () => {
	return (
		<div className={s.heroSlider}>
			<Swiper
				// autoplay={{
				// 	delay: 4000,
				// }}
				loop={true}
				grabCursor={true}
				spaceBetween={0}
				slidesPerView={1}
				modules={[Autoplay]}
			>
				{movieItems.map(i => (
					<SwiperSlide key={i} className={s.slide}>
						{({ isActive }) => <HeroSlide isActive={isActive} />}
					</SwiperSlide>
				))}
			</Swiper>

			{movieItems.map((_item, index) => (
				<Modal key={index} active={false} id={`modal_1`}>
					<iframe
						height='500px'
						title='trailer'
						width='100%'
						src='https://www.youtube.com/watch?v=AkW_ce3pgeA'
					></iframe>
				</Modal>
			))}
		</div>
	)
}

export default HeroSlider
