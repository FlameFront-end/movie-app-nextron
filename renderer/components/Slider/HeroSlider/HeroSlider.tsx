import { FC, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSnapshot } from 'valtio'
import { state } from '../../../state'
import ModalTrailer from '../../ui/Modals/ModalTrailer/ModalTrailer'
import HeroSlide from '../HeroSlide/HeroSlide'
import s from './HeroSlider.module.scss'

const HeroSlider: FC = () => {
	const [activeModal, setActiveModal] = useState(false)
	const snap = useSnapshot(state)

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
				{snap.popularMovies?.map((movie, index) => (
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

			{snap.popularMovies?.map((item, index) => (
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
