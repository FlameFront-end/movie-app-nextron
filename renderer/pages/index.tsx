import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { OutlineButton } from '../components/ui/Button/Button'

import { HeroSlider, MovieList } from '../components'
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
						</div>
					</main>
				</div>
			</div>
		</Curve>
	)
}

export default HomePage
