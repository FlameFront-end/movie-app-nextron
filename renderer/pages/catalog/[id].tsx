import { NextPage } from 'next'
import { useState } from 'react'
import CastList from '../../components/CastList/CastList'
import Curve from '../../layouts/Curve'
import s from './Detail.module.scss'

interface DetailProps {
	movieId: number
}

// eslint-disable-next-line react/prop-types
const Detail: NextPage<DetailProps> = ({ movieId }) => {
	const [item, setItem] = useState({
		title: 'title',
		name: 'name',
		overview: 'overview',
		genres: [{ name: 'genre' }]
	})

	console.log('movieId', movieId)

	return (
		<Curve>
			<div className='wrapper'>
				{item && (
					<>
						<div
							className={s.banner}
							style={{
								backgroundImage: `url(http://localhost:4000/uploads/movies/e4d7249d21c3105a10e.jpg)`
							}}
						></div>
						<div className={`container ${s.movie_content}`}>
							<div className={s.poster}>
								<div
									className={s.img}
									style={{
										backgroundImage: `http://localhost:4000/uploads/movies/e4d7249d21c3105a10e.jpg`
									}}
								></div>
							</div>
							<div className={s.info}>
								<h1 className={s.title}>{item.title || item.name}</h1>
								<div className={s.genres}>
									{item.genres &&
										item.genres.slice(0, 5).map((genre, i) => (
											<span key={i} className={s.genres__item}>
												{genre.name}
											</span>
										))}
								</div>
								<p className='overview'>{item.overview}</p>
								<div className='cast'>
									<div className='section__header'>
										<h2>Casts</h2>
									</div>
									<CastList id={movieId} />
								</div>
							</div>
						</div>
						<div className='container'>
							<div className='section mb-3'>видео</div>
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Similar</h2>
							</div>
							{/*<MovieList category={category} type='similar' id={item.id} />*/}
						</div>
					</>
				)}
			</div>
		</Curve>
	)
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
