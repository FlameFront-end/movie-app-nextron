import { FC, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import { Movie } from '../../../api'
import { state } from '../../../state'
import { MovieCard } from '../../index'

import s from './MovieGrid.module.scss'

type Sort = 'createdAt' | 'popular' | 'favorites' | 'search'

interface MovieGridProps {
	sort?: Sort
}

const MovieGrid: FC<MovieGridProps> = ({ sort = 'createdAt' }) => {
	const snap = useSnapshot(state)
	const [movies, setMovies] = useState<Movie[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (sort === 'createdAt') {
			// @ts-ignore
			setMovies(snap.movies)
			setIsLoading(false)
		}

		if (sort === 'popular') {
			// @ts-ignore
			setMovies(snap.popularMovies)
			setIsLoading(false)
		}

		if (sort === 'favorites') {
			// @ts-ignore
			setMovies(snap.user?.favorites)
			setIsLoading(false)
		}

		if (sort === 'search') {
			// @ts-ignore
			setMovies(snap.searchMovies)
			setIsLoading(false)
		}
	}, [
		snap.movies,
		snap.popularMovies,
		snap.searchMovies,
		snap.user?.favorites,
		sort
	])

	return (
		<div className={s.movieList}>
			{!isLoading && sort === 'search' && !movies.length ? (
				<div className={s.no_res}>
					Увы, мы не смогли найти фильм по Вашему запросу :(
				</div>
			) : (
				<>
					{movies?.map((item, index) => (
						<div className={s.card} key={index}>
							<MovieCard
								backgroundImgUrl={item.posterImage}
								category='test'
								id={item.id}
								title={item.title}
								item={item}
							/>
						</div>
					))}
				</>
			)}
		</div>
	)
}

export default MovieGrid
