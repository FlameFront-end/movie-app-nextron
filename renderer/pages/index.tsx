import { NextPage } from 'next'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import MovieList from '../components/Movie/MovieList/MovieList'
import HeroSlider from '../components/Slider/HeroSlider/HeroSlider'
import { OutlineButton } from '../components/ui/Button/Button'
import Curve from '../layouts/Curve'

const HomePage: NextPage = () => {
	const { t } = useTranslation()

	return (
		<Curve>
			<div className='main-page'>
				<div className='top'>
					<main>
						<HeroSlider />
						<div className='container'>
							<div className='section mb-3'>
								<div className='section__header mb-2'>
									<h2>{t('Популярные фильмы')}</h2>
									<Link href='/movies'>
										<OutlineButton className='small'>
											{t('Смотреть больше')}
										</OutlineButton>
									</Link>
								</div>
								<MovieList sort='popular' />
							</div>

							<div className='section mb-3'>
								<div className='section__header mb-2'>
									<h2>{t('Новые фильмы')}</h2>
									<Link href='/movies'>
										<OutlineButton className='small'>
											{t('Смотреть больше')}
										</OutlineButton>
									</Link>
								</div>
								<MovieList sort='createdAt' />
							</div>

							<div className='section mb-3'>
								<div className='section__header mb-2'>
									<h2>{t('Популярные ТВ сериалы')}</h2>
									<Link href='/'>
										<OutlineButton className='small'>
											{t('Смотреть больше')}
										</OutlineButton>
									</Link>
								</div>
								<MovieList />
							</div>

							<div className='section mb-3'>
								<div className='section__header mb-2'>
									<h2>{t('Новые ТВ сериалы')}</h2>
									<Link href='/'>
										<OutlineButton className='small'>
											{t('Смотреть больше')}
										</OutlineButton>
									</Link>
								</div>
								<MovieList />
							</div>
						</div>
					</main>
				</div>
			</div>
		</Curve>
	)
}

export default HomePage
