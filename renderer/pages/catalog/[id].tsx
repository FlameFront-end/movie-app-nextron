import { NextPage } from 'next'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import CastList from '../../components/CastList/CastList'
import MovieList from '../../components/Movie/MovieList/MovieList'
import * as Api from '../../api'
import { CreateResponseMovieDto } from '../../api/movie/movie.dto'
import Curve from '../../layouts/Curve'
import s from './Detail.module.scss'

interface DetailProps {
	movieId: number
}

const Detail: NextPage<DetailProps> = ({ movieId }) => {
	const [item, setItem] = useState<CreateResponseMovieDto | null>(null)

	useEffect(() => {
		Api.movie.getMovieById(movieId).then(res => {
			setItem(res)
		})
	}, [movieId])

	return (
		<Curve>
			{item && (
				<>
					<div
						className={s.banner}
						style={{
							backgroundImage: `url(${item.mainImage})`
						}}
					></div>
					<div className={`container ${s.movie_content}`}>
						<div className={s.poster}>
							<div
								className={s.img}
								style={{
									backgroundImage: `url(${item.posterImage})`
								}}
							></div>
						</div>
						<div className={s.info}>
							<h1 className={s.title}>{item.title}</h1>
							{item.tags?.length ? (
								<div className={s.genres}>
									{item.tags.map((tag, index) => (
										<span key={index} className={s.genres__item}>
											{tag}
										</span>
									))}
								</div>
							) : null}

							<p className='overview'>{item.description}</p>
							<div className='cast'>
								<div className='section__header'>
									<h2>Актёры</h2>
								</div>
								<CastList actors={item.actors} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<div className={s.video}>
								<div className={s.video__title}>
									<h2>Трейлер</h2>
								</div>
								<video
									src={item.trailerVideo}
									controls
									width='100%'
									title='video'
								></video>
							</div>
							<div className={s.video}>
								<div className={s.video__title}>
									<h2>Фильм</h2>
								</div>
								<video
									controls
									src={item.mainVideo}
									width='100%'
									title='video'
								></video>
							</div>
						</div>

						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Смотрите так же</h2>
							</div>
							<MovieList />
						</div>
					</div>
				</>
			)}
		</Curve>
	)
}

Detail.propTypes = {
	movieId: PropTypes.number.isRequired
}

export default Detail

export async function getServerSideProps(ctx) {
	if (!ctx.query.id) {
		return {
			redirect: {
				permanent: false
			}
		}
	}
	return { props: { movieId: Number(ctx.query.id) } }
}
